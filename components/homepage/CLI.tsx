"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const initialOutput = `Initializing system...
Loading modules... [OK]
Connecting to the coding universe... [OK]

Welcome, developer! Type 'help' to get started.`;

const CLI = () => {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([initialOutput]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const commands: { [key: string]: string } = {
    help: "Available commands: events, join, contact, clear, help",
    events:
      "Upcoming event: Hackathon - March 15th. Type 'join' to participate!",
    join: "Redirecting to events page ... ",
    contact: "Email: codingclub@example.com | Phone: +91 9876543210",
    clear: "clear",
  };

  const handleCommand = (cmd: string) => {
    if (cmd === "clear") {
      setOutput([]);
      return;
    }

    //set output
    const response =
      commands[cmd] ||
      `Unknown command: '${cmd}'. Type 'help' for list of commands.`;

    setOutput((prev) => [...prev, `> ${cmd}`, response]);
    setHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    //action on specific command
    if (cmd == "join") {
      setTimeout(() => {
        router.push("/events");
      }, 3000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (input.trim()) handleCommand(input.trim());
      setInput("");
    } else if (e.key === "ArrowUp") {
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setInput(history[history.length - 1 - newIndex]);
        setHistoryIndex(newIndex);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex >= 0) {
        const newIndex = historyIndex - 1;
        setInput(newIndex >= 0 ? history[history.length - 1 - newIndex] : "");
        setHistoryIndex(newIndex);
      }
    }
  };

  return (
    <div className="bg-black text-green-400 p-4 rounded-lg shadow-lg w-full max-w-2xl mx-auto font-mono">
      <div className="h-64 overflow-auto">
        {output.map((line, index) => (
          <div key={index} className="whitespace-pre-line">
            {line}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <span className="mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-black text-green-400 outline-none w-full"
        />
      </div>
    </div>
  );
};

export default CLI;

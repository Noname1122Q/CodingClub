"use client";
import { HashLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <HashLoader />
    </div>
  );
}

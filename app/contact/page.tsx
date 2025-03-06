import ClubContact from "@/components/contact/ClubContact";
import RecruitmentForm from "@/components/homepage/RecruitmentForm";
import { Separator } from "@/components/ui/separator";
import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ClubContact />
      <Separator
        orientation="horizontal"
        className="px-2 lg:px-4 bg-[#d3b33e] "
      />
      <RecruitmentForm />
    </div>
  );
};

export default ContactPage;

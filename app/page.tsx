import Image from "next/image";
import React from "react";
import profileImg from "@/public/profileImg.svg";

const Page = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full mt-10">
      <Image
        src={profileImg}
        width={500}
        height={500}
        className="w-20 h-20"
        alt="Picture of the author"
      />
      <h1>Welcome, Ratul Osman</h1>
      <p>Manage your information, subscriptions, and security.</p>
    </div>
  );
};

export default Page;

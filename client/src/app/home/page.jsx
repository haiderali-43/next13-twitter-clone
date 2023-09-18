"use client";
import React, { useState } from "react";
import Feed from "@/components/Feed";
import TweetBox from "@/components/TweetBox";

const Page = () => {
  return (
    <div className="sm:w-[50%] w-[80%] absolute right-0 sm:relative  sm:m-auto md:border-r-2">
      <div className="p-3">
        <h2 className="text-[18px] font-extralight">Home</h2>
      </div>
      {/* Tweet Box */}
      <TweetBox />
      {/* Tweet box end */}
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
    </div>
  );
};

export default Page;

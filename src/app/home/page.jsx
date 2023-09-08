"use client";
import React, { useState } from "react";
import { FaAngleDown, FaPoll } from "react-icons/fa";
import { AiOutlinePicture } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import Feed from "@/components/Feed";

const Page = () => {
  const [tweet, setTweet] = useState("");

  const handleTweetChange = (e) => {
    const inputText = e.target.value;
    setTweet(inputText);
  };

  return (
    <div className="w-[50%] m-auto border-r-2 border-black">
      <div className="p-3">
        <h2 className="text-[18px] font-extralight">Home</h2>
      </div>
      {/* Tweet Box */}
      <div className="w-full h-[15rem] border-t-2 border-b-2">
        <div className="flex p-3">
          {/* profile logo */}
          <div className="w-[10%]">
            <div className="w-11 h-11 p-2 text-[18px] bg-slate-400 rounded-full text-center">
              H
            </div>
          </div>
          {/* Tweet Box */}
          <div className="w-[90%]">
            {/* Privacy for tweet */}
            <div className="p-1 w-fit text-blue-600  gap-x-1 ">
              <select className="border-2 rounded-lg outline-none">
                <option value="Everyone">
                  Everyone <FaAngleDown />
                </option>
                <option value="Circle">Circle</option>
              </select>
            </div>
            {/* Input for tweet box */}
            <div>
              <textarea
                placeholder="What's happening?"
                value={tweet}
                onChange={handleTweetChange}
                rows={5}
                className="w-full p-2 outline-none resize-none border-b"
                maxLength={280}
              />
            </div>
            {/* Input for tweet box end */}
            {/* tweet button */}
            <div className="flex justify-between items-center">
              <div className="flex gap-x-[3rem] text-[18px]">
                <AiOutlinePicture />
                <FaPoll />
                <GrLocation />
              </div>

              <div className="mr-9">
                <button
                  className="border px-4 py-2 bg-blue-700 rounded-[900px] text-white"
                  onClick={() => console.log(tweet)}
                >
                  Post
                </button>
              </div>
            </div>
            {/* Tweet button end */}
          </div>
        </div>
      </div>
      {/* Tweet box end */}
      <Feed />
    </div>
  );
};

export default Page;

import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { FaPoll } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { FiSettings } from "react-icons/fi";

const TweetBox = () => {
  const [tweet, setTweet] = useState("");

  const handleTweetChange = (e) => {
    setTweet(e.target.value);
  };

  return (
    <div className="w-full h-auto border-t border-b border-gray-200">
      <div className="flex p-3">
        {/* Profile logo */}
        <div className="w-[10%]">
          <div className="w-11 h-11 p-2 text-[18px] bg-slate-400 rounded-full text-center">
            H
          </div>
        </div>
        {/* Tweet Box */}
        <div className="w-[90%] ml-2 sm:ml-0">
          {/* Input for tweet box */}
          <div>
            <textarea
              placeholder="What's happening?"
              value={tweet}
              onChange={handleTweetChange}
              rows={5}
              className="w-full p-2 outline-none resize-none border-b border-gray-300 focus:border-blue-400"
              maxLength={280}
            />
          </div>
          {/* Input for tweet box end */}
          {/* Tweet box options */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex gap-x-6 text-blue-500">
              <AiOutlinePicture className="cursor-pointer" />
              <FaPoll className="cursor-pointer" />
              <GrLocation className="cursor-pointer" />
              <FiSettings className="cursor-pointer" />
            </div>
            <div>
              <button
                className={`px-6 py-2 rounded-full text-white ${
                  tweet
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-blue-200 cursor-not-allowed"
                }`}
                onClick={() => console.log(tweet)}
                disabled={!tweet}
              >
                Tweet
              </button>
            </div>
          </div>
          {/* Tweet box options end */}
        </div>
      </div>
    </div>
  );
};

export default TweetBox;

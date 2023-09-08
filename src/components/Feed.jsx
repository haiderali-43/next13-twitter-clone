import React from "react";
import { BsThreeDots, BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { IoAnalyticsOutline } from "react-icons/io5";

const Feed = () => {
  return (
    <div className="w-full p-2">
      <div className="flex">
        {/* Avatar */}
        <div className="w-[10%]">
          <div className="w-11 h-11 p-2 text-[18px] bg-slate-400 rounded-full text-center">
            H
          </div>
        </div>
        {/* Name and username */}
        <div className="flex gap-x-[8px] mt-[6px] w-[90%]">
          <h2 className="text-[16px] font-extrabold">Haider Ali</h2>
          <h5 className="font-extralight">@haiderali</h5>
          <div className="ml-[24rem] mt-1 text-[18px]">
            <BsThreeDots />
          </div>
        </div>
      </div>
      {/* Tweet Text */}
      <div className="w-[90%] float-right">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officia
          natus velit facere, alias aliquid doloribus debitis unde vero sint!
        </p>
        {/* Image */}
        <div className="w-[14rem] h-[12rem] bg-slate-400 mt-2">Haider</div>
        {/* Like and comment */}
        <div className="flex mt-7 gap-x-[6rem] text-[16px]">
          <FaRegComment />
          <FaRetweet />
          <BsHeart />
          <IoAnalyticsOutline />
        </div>
      </div>
    </div>
  );
};

export default Feed;

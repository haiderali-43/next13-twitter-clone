import Image from "next/image";
import React from "react";
import { BsThreeDots, BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { IoAnalyticsOutline } from "react-icons/io5";

const Feed = () => {
  return (
    <div className="w-full p-2">
      <div>
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
          <p className="w-[85%] overflow-x-hidden">
            qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq <br />{" "}
            qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq <br />{" "}
            qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq <br />
            qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq <br />{" "}
            qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq <br />
            qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
          </p>
          {/* Image */}
          <div className="  mt-4 rounded-lg">
            <Image
              src={"/tweet.jpg"}
              alt="Tweet img"
              width={500}
              height={400}
            />
          </div>
          {/* Like and comment */}
          <div className="flex mt-7 gap-x-[9rem] text-[16px]">
            <FaRegComment />
            <FaRetweet />
            <BsHeart />
            <IoAnalyticsOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;

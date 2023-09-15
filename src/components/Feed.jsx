import Image from "next/image";
import React from "react";
import { BsThreeDots, BsHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { IoAnalyticsOutline } from "react-icons/io5";

const Feed = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <div className="flex">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <Image
            src={"/logo.png"}
            alt="Avatar"
            width={40}
            height={40}
            className="border-black border-2 rounded-full ml-3 mt-1"
          />
        </div>
        {/* Name and username */}
        <div>
          <h2 className="text-lg font-semibold">Haider Ali</h2>
          <h5 className="text-gray-500">@haiderali</h5>
        </div>
        <div className="ml-auto">
          <BsThreeDots className="text-gray-400 cursor-pointer" />
        </div>
      </div>
      {/* Tweet Text */}
      <p className="mt-4 text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        interdum justo eu ligula tristique, at cursus odio rhoncus. Sed
        venenatis tristique ante a eleifend. Nulla facilisi. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Repudiandae, voluptates!
      </p>
      {/* Image */}
      <div className="mt-4">
        <Image
          src="/tweet.jpg"
          alt="Tweet img"
          width={500}
          height={400}
          className="w-auto h-auto"
        />
      </div>
      {/* Like, comment, retweet, and analytics */}
      <div className="flex mt-4 text-gray-500">
        <div className="flex items-center mr-8">
          <FaRegComment className="mr-1" />
          <span>25</span>
        </div>
        <div className="flex items-center mr-8">
          <FaRetweet className="mr-1" />
          <span>100</span>
        </div>
        <div className="flex items-center mr-8">
          <BsHeart className="mr-1 text-red-500" />
          <span>300</span>
        </div>
        <div className="flex items-center">
          <IoAnalyticsOutline className="mr-1" />
          <span>Analytics</span>
        </div>
      </div>
    </div>
  );
};

export default Feed;

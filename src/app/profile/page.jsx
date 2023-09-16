import React from "react";
import Image from "next/image";
import Feed from "@/components/Feed";

import Link from "next/link";

const Page = () => {
  return (
    <div className="sm:w-[50%] w-[80%] absolute right-0 sm:relative  sm:m-auto md:border-r-2  h-[100vh] p-2">
      <div>
        <h2 className="font-extrabold text-[20px] px-4">Hassan Hussaian</h2>
        <span className="px-4 mt-2">0 post</span>
      </div>
      {/* Cover Image */}
      <div>
        <Image
          src={"/cover.jpg"}
          alt="Cover"
          width={800}
          height={400}
          className="mt-4 backdrop-brightness-80"
        />
      </div>
      {/* Profile Image */}
      <div className="rounded-full bg-blue-700 w-[200px] h-[200px]  text-[52px] flex items-center justify-center drop-shadow-lg -mt-[4rem] ml-7">
        H
      </div>
      {/* Edit Profile Button */}
      <div>
        <Link
          href={"/editprofile"}
          className="absolute bottom-[9rem] right-[4rem] border-2 rounded-[999px] p-2 hover:bg-[#e7e7e8] cursor-pointer transition-all duration-200"
        >
          Edit Profile
        </Link>
      </div>
      <div className="mt-8 p-2">
        <div className="ml-8">
          <div className="font-extrabold text-[20px]">Hassan Hussaian</div>
          <div className="font-extralight text-gray-400">@hassanhussaian</div>
        </div>
        {/* Bio */}
        <div className="mt-4">
          <p>
            I am Haider Ali. Currently I have qualification of inter but in
            future inshallah i will be Data Scientist. I am also building next
            js 13 twitter clone to improv
          </p>
        </div>
        {/* following and follwers */}
        <div className="flex gap-x-2">
          <div className="font-extralight text-gray-400">
            <span className="font-extrabold text-black">1</span> Following
          </div>
          <div className="font-extralight text-gray-400">
            <span className="font-extrabold text-black">1</span> Followers
          </div>
        </div>
      </div>
      {/* Posts */}
      <div className="mt-[3rem] border-t-2">
        <h4 className="ml-7 text-[20px] font-extralight">Posts</h4>
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
    </div>
  );
};

export default Page;

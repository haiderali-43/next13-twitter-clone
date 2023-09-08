"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineUser,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";
import LogOutbox from "./LogOutbox";

const LeftSidebar = () => {
  const navData = [
    {
      title: "Home",
      icon: <AiOutlineHome />,
      path: "/home",
    },
    {
      title: "Explore",
      icon: <AiOutlineSearch />,
      path: "/explore",
    },
    {
      title: "Notifications",
      icon: <AiOutlineBell />,
      path: "/notifications",
    },
    {
      title: "Messages",
      icon: <AiOutlineMail />,
      path: "/messages",
    },
    {
      title: "Lists",
      icon: <AiOutlineSearch />,
      path: "/lists",
    },
    {
      title: "Communities",
      icon: <AiOutlineUsergroupAdd />,
      path: "/communities",
    },
    {
      title: "Verified",
      icon: <AiOutlineTwitter />,
      path: "/verified",
    },
    {
      title: "Profile",
      icon: <AiOutlineUser />,
      path: "/profile",
    },
    {
      title: "More",
      icon: <CiCircleMore />,
    },
  ];
  const [isLogOutOpened, setIsLogOutOpened] = useState(false);
  const handleLogoutBox = () => {
    setIsLogOutOpened(!isLogOutOpened);
  };
  return (
    <div className="w-15 h-[100vh]  sm:w-[25%] fixed overflow-y-scroll">
      <div className="logo">
        {/* Large screen logos */}
        <Link href={"/home"} className="hidden sm:block">
          <div className="group flex ml-10 mt-2 items-center p-2 w-fit rounded-full hover:bg-gray-200 transition-colors duration-300">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
          </div>
        </Link>
        {/* Mobile logo */}
        <Link href={"/home"} className="sm:hidden">
          <div className="group flex ml-3 mt-2 items-center p-2 w-fit rounded-full hover:bg-gray-200 transition-colors duration-300">
            <Image src="/logo.png" alt="logo" width={30} height={30} />
          </div>
        </Link>
        <div>
          {navData.map((item, index) =>
            item.path ? (
              <div key={index}>
                <Link
                  href={item.path}
                  className="flex gap-x-4 mt-4 px-4 py-2 rounded-[999px]  hover:bg-[#e7e7e8] sm:ml-8 ml-2 items-center w-fit transition duration-300"
                >
                  <div className="text-[26px]">{item.icon}</div>
                  <div className="text-[18px] hidden md:block font-light">
                    {item.title}
                  </div>
                </Link>
              </div>
            ) : (
              <div
                key={index}
                className="flex gap-x-4 mt-4 px-4 py-2 hover:bg-[#e7e7e8] items-center w-fit rounded-[999px] transition-colors duration-300 sm:ml-8 ml-2 "
              >
                <div className="text-[26px]">{item.icon}</div>
                <div className="text-[18px] hidden md:block font-light">
                  {item.title}
                </div>
              </div>
            )
          )}
        </div>
        {/* profile information */}
        <div
          className="flex mt-5 sm:ml-8 ml-2 gap-x-4 items-center w-fit hover:bg-[#e7e7e8] transition-colors duration-100 rounded-[999px] p-2 cursor-pointer relative top-[-10px]"
          onClick={handleLogoutBox}
        >
          {/* profile logo */}
          <div className="w-11 h-11 p-2 text-[18px] bg-slate-400 rounded-full text-center">
            H
          </div>
          {/* Name & username */}
          <div className="hidden sm:block">
            <div className="font-extrabold">Hassan Hussaian</div>
            <div className="font-light text-[#6191c4]">@hassanhussaian</div>
          </div>
          {/* three dots */}
          <div className="hidden sm:block">
            <FiMoreHorizontal />
          </div>
        </div>
        {isLogOutOpened && <LogOutbox />}
      </div>
    </div>
  );
};

export default LeftSidebar;

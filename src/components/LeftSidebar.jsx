import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineUser,
  AiOutlineMore,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";

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
      icon: <AiOutlineMore />,
    },
  ];
  return (
    <div className="w-15 sm:w-[25%] overflow-y-scroll">
      <div className="logo">
        {/* Large screen logos */}
        <Link href={"/home"} className="hidden sm:block">
          <div className="group flex ml-5 mt-2 items-center p-2 w-fit rounded-full hover:bg-gray-200 transition-colors duration-300">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
          </div>
        </Link>
        {/* Mobile logo */}
        <Link href={"/home"} className="sm:hidden">
          <div className="group flex ml-5 mt-2 items-center p-2 w-fit rounded-full hover:bg-gray-200 transition-colors duration-300">
            <Image src="/logo.png" alt="logo" width={30} height={30} />
          </div>
        </Link>
        <div>
          {navData.map((item, index) =>
            item.path ? (
              <div key={index}>
                <Link
                  href={item.path}
                  className="flex gap-x-2 mt-5 px-4 py-2 rounded-[999px]  hover:bg-[#e1e8ed] ml-2 items-center w-fit transition duration-300"
                >
                  <div className="text-[26px]">{item.icon}</div>
                  <div className="text-[18px] hidden sm:block">{item.title}</div>
                </Link>
              </div>
            ) : (
              <div
                key={index}
                className="flex gap-x-2 mt-5 px-6 py-2 hover:bg-[#e1e8ed] items-center w-fit rounded-[999px] transition-colors duration-300 ml-2 "
              >
                <div className="text-[26px]">{item.icon}</div>
                <div className="text-[18px] hidden sm:block">{item.title}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;

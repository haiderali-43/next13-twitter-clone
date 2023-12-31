"use client";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const router = useRouter();

  // show and Hide Password
  const handleShowPassword = () => {
    const showPassword = document.getElementById("show-password");
    const userPassword = document.getElementById("user-password");
    if (userPassword.type == "password") {
      userPassword.type = "text";
      showPassword.innerHTML = "Hide";
    } else {
      userPassword.type = "password";
      showPassword.innerHTML = "Show";
    }
  };

  return (
    <main
      className="md:w-[500px] md:h-[600px] w-[400px] h-[550px] rounded-lg bg-white/75  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-3"
      style={{ boxShadow: "10px 10px 10px 10px rgba(0,0,0, 0.4" }}
    >
      {/* Twitter login Page */}
      <div>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={50}
          height={50}
          className="m-auto"
        />
        <div>
          <h2 className="font-extrabold text-[20px] ml-[5rem] mt-5">
            Sign into X
          </h2>
          {/* Sign in with Email and Password */}
          <form action="" method="POST"></form>
          <div className="flex flex-col gap-y-6 mt-9">
            <input
              type="text"
              placeholder="Name"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="signup-name"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="signup-username"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="signup-email"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="user-password"
              name="signup-password"
            />
            <span
              id="show-password"
              className="absolute right-[6rem] top-[24.5rem] cursor-pointer"
            >
              Show
            </span>
            <button className="w-[70%] m-auto h-[3rem] hover:bg-gray-300 hover:text-black hover:font-extrabold  rounded-[999px] border-2 text-blue-500 transition-all duration-300">
              Sign up
            </button>
          </div>
        </div>
        <div className="text-center mt-4 md:mt-6 space-x-2">
          Already have an account?{" "}
          <Link href={"/"} className="text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </main>
  );
}

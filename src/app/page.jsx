"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
          {/* Socail Sign ins */}
          <div className="space-y-3 mt-[2rem]">
            {/* Sign in with Google */}
            <div
              className="flex justify-center w-[70%] m-auto space-x-2 p-2 rounded-[999px] bg-slate-200 cursor-pointer"
            >
              <Image src={"/google.png"} alt="Google" width={32} height={32} />
              <p className="mt-1 font-bold">Continue with Google</p>
            </div>
          </div>
          {/* Sign in with Email and Password */}
          <form action=""></form>
          <div className="flex flex-col gap-y-6 mt-9">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="login-email"
            />

            <input
              type="password"
              placeholder="Enter your password"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="user-password"
              name="login-password"
            />
            {/* Show and hide password */}
            <span
              id="show-password"
              onClick={handleShowPassword}
              className="absolute right-[6rem] top-[20rem] cursor-pointer"
            >
              Show
            </span>

            <button
              className="w-[70%] m-auto h-[3rem]   rounded-[999px] border-2 text-blue-500 hover:bg-gray-400 transition-all duration-300 hover:text-black hover:font-bold"
             
            >
              Sign in
            </button>
          </div>
          <div className="text-center mt-4">Forgot Password</div>
        </div>
        <div className="text-center mt-4 md:mt-6 space-x-2">
          Don&apos;t have an account?{" "}
          <Link href={"/sign-up"} className="text-blue-500">
            Sign up
          </Link>
        </div>
      </div>
    </main>
  );
}

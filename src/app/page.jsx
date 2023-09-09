import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
            <div className="flex justify-center w-[70%] m-auto space-x-2 p-2 rounded-[999px] bg-slate-500">
              <span>X</span>
              <p>Sign in with Google</p>
            </div>
            {/* Sign in with Apple */}
            <div className="flex justify-center w-[70%] m-auto space-x-2 p-2 rounded-[999px] bg-slate-500">
              <span>X</span>
              <p>Sign in with Apple</p>
            </div>
          </div>
          {/* Sign in with Email and Password */}
          <form action=""></form>
          <div className="flex flex-col gap-y-6 mt-9">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-[70%] m-auto h-[2rem] px-2 py-6 rounded-lg border-2 focus:outline-none"
            />
            <button className="w-[70%] m-auto h-[2rem]  rounded-[999px] border-2 text-blue-500">
              Sign in
            </button>
          </div>
          <div className="text-center mt-4">Forgot Password</div>
        </div>
        <div className="text-center mt-4 md:mt-6 space-x-2" >
          Don&apos;t have an account? <Link href={'/sign-up'} className="text-blue-500">Sign up</Link>
        </div>
      </div>
    </main>
  );
}

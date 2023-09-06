import React from "react";

const LogOutbox = () => {
  return (
    <div
      className="absolute bottom-[5rem] space-y-2 left-6 h-[6rem] w-fit p-6 font-extrabold bg-[#f0f0ff]  rounded-2xl"
      style={{
        WebkitBoxShadow: "10px 10px 5px 0px rgba(255, 255, 255, 1)",
        MozBoxShadow: "10px 10px 5px 0px rgba(255, 255, 255, 1)",
        boxShadow: "10px -10px 5px 0px rgba(255, 255, 255, 1)",
      }}
    >
      <div>Add an existing account</div>
      <div>Logout @HassanHussaian</div>
    </div>
  );
};

export default LogOutbox;

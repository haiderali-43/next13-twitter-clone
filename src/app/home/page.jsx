import React from "react";
import { FaAngleDown } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-[50%]">
      <div className="p-3">
        <h2 className="text-[18px] font-extralight">Home</h2>
      </div>
      {/* Tweet Box */}
      <div className="w-full h-[14rem] border-t-2 border-b-2">
        <div className="flex p-3">
          {/* profile logo */}
          <div className="w-[10%]">
            <div className="w-11 h-11 p-2 text-[18px] bg-slate-400 rounded-full text-center">
              H
            </div>
          </div>
          {/* Tweet Box */}
          <div className="w-[90%]">
            {/* Privacy for tweet */}
            <div className="p-1 w-fit text-blue-600 flex gap-x-1 ">
              <select
                name=""
                id=""
                className="border-2 rounded-lg outline-none"
              >
                <option value="Everyone">
                  Everyone <FaAngleDown />
                </option>
                <option value="Circle">Circle</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

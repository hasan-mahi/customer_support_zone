import React from "react";
import vectorImg from "../../assets/vector1.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <div className="grid gap-4 sm:grid-cols-2 grid-cols-1">
        <div className="grid grid-cols-3 w-full max-w-177 h-50 rounded overflow-hidden bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-white">
          <img src={vectorImg} className="h-full w-full" alt="" />
          <div className="flex flex-col items-center justify-center text-center">
            <p>In-Progress</p>
            <h1 className="text-3xl font-semibold">0</h1>
          </div>
          <img src={vectorImg} className="h-full w-full rotate-180" alt="" />
        </div>

        <div className="grid grid-cols-3 w-full max-w-177 h-50 rounded overflow-hidden bg-linear-to-br from-[#54CF68] to-[#00827A] text-white">
          <img src={vectorImg} className="h-full w-full" alt="" />
          <div className="flex flex-col items-center justify-center text-center">
            <p>Resolved</p>
            <h1 className="text-3xl font-semibold">0</h1>
          </div>
          <img src={vectorImg} className="h-full w-full rotate-180" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

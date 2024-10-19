"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "total",
    count: 150,

    fill: "#fff",
  },
  {
    name: "Boys",
    count: 100,

    fill: "#C3EBFA",
  },
  {
    name: "Girls",
    count: 50,

    fill: "#FAE27C",
  },
];

const CompChart = () => {
  return (
    <div className="bg-white w-full h-full p-4 flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <h1>Students</h1>
        <Image
          className="cursor-pointer"
          src={"/moreDark.png"}
          alt=""
          width={20}
          height={20}
        ></Image>
      </div>
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={30}
            data={data}
          >
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/maleFemale.png"}
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        ></Image>
      </div>
      <div className="flex gap-16 ">
        <div className="flex flex-col  ">
          <div className="h-7 w-7 rounded-full bg-rolexSky"></div>
          <h1 className="text-xl font-bold">1200</h1>
          <h2 className="text-slate-400">Boys (60%) </h2>
        </div>
        <div className="flex flex-col ">
          <div className="h-7 w-7 rounded-full bg-rolexYellow"></div>
          <h1 className="text-xl font-bold">900</h1>
          <h2 className="text-slate-400">Girls (40%) </h2>
        </div>
      </div>
    </div>
  );
};

export default CompChart;

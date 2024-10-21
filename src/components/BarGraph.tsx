"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    present: 40,
    absent: 24,
  },
  {
    name: "Sun",
    present: 30,
    absent: 13,
  },
  {
    name: "Mon",
    present: 20,
    absent: 98,
  },
  {
    name: "Tue",
    present: 27,
    absent: 39,
  },
  {
    name: "Wed",
    present: 18,
    absent: 48,
  },
  {
    name: "Thu",
    present: 23,
    absent: 38,
  },
  {
    name: "Fri",
    present: 34,
    absent: 43,
  },
];
const BarGraph = () => {
  return (
    <div className="flex flex-col w-[100%] h-full gap-6">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">Attendance</h1>
        <Image
          className="cursor-pointer"
          alt=""
          width={20}
          height={20}
          src={"/moreDark.png"}
        ></Image>
      </div>
      <div className=" w-[100%] h-[75%] ">
        <ResponsiveContainer width="100%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{ paddingBottom: "20px" }}
            />
            <Bar dataKey="present" fill="#8884d8" />
            <Bar dataKey="absent" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarGraph;

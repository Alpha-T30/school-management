"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
const Events = () => {
  const [value, onChange] = useState<Value>(new Date());
  function item(
    value: { id: number; title: string; time: string; description: string },
    index: number,
    array: { id: number; title: string; time: string; description: string }[]
  ): ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex flex-col gap-5">
      <Calendar onChange={onChange} value={value} />
      <div className="flex gap-5 flex-col">
        <div className="flex items-center justify-between">
          <h1>Events</h1>
          <Image
            className="cursor-pointer"
            alt=""
            width={20}
            height={20}
            src={"/moreDark.png"}
          ></Image>
        </div>
        <div>
          {events.map((item) => (
            <div
              className="flex flex-col gap-3 border-b-3 border-blue-200 border-t-4 odd:border-t-yellow-600 even:border-t-green-600 p-2 rounded-sm mb-5"
              key={item.id}
            >
              <div className="flex items-center justify-between mt-2">
                <h2 className="font-semibold">{item.title}</h2>
                <span className="text-sm text-gray-500">{item.time}</span>
              </div>
              <p className="text-sm text-gray-400 text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;

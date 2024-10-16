import React from "react";

export default function Transactions({ img, name, date, price, status }) {
  return (
    <li className="flex items-center">
      <div className="flex items-center gap-3 w-2/5">
        <img src={img} className="w-12 h-12 rounded-full" alt="" />
        <span className="text-sm font-bold">{name}</span>
      </div>
      <span className="text-sm w-1/5 text-[#C7C2C4]">{date}</span>
      <span className="text-sm w-1/5 text-[#C7C2C4]">${price}</span>
      <span className="text-xs w-1/5">
        <span className={`px-2 py-1 rounded-full ${status == "active" ? "bg-green-100 text-green-500" : status === "paused" ? "bg-red-100 text-red-500" : "bg-orange-100 text-orange-500"}`}>{status}</span>
      </span>
    </li>
  );
}

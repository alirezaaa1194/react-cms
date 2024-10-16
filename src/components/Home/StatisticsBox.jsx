import React from "react";

export default function StatisticsBox({ title, price, statistics, profit }) {
  return (
    <div className="flex flex-col justify-between p-6 rounded-lg shadow-primaryShadow">
      <span className="font-bold text-black/70 mb-3">{title}</span>
      <div className="flex items-center">
        <h2 className="font-bold text-3xl">${price}</h2>
        <span className="ml-6 mr-2 text-sm">{statistics}</span>
        {profit == true ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        )}
      </div>
      <span className="text-sm text-[#C7C2C4] mt-3">compared to last month</span>
    </div>
  );
}

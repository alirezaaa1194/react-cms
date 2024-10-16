import React from "react";

export default function RecentMember({img, username, fullname}) {
  return (
    <li className="flex items-center justify-between shadow-none">
      <img src={img} className="w-12 h-12 rounded-full" alt="" />
      <div className="flex flex-col items-start">
        <span className="text-sm font-bold">{username}</span>
        <span className="text-sm font-bold text-[#C7C2C4]">{fullname}</span>
      </div>
      <button className="px-2 py-1 text-xs flex items-center gap-2 text-black/80 bg-[#dbdbdb] rounded-md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        Display
      </button>
    </li>
  );
}

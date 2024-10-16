import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <>
      <aside className={`fixed ${props.sidebarOpen === true ? "left-4" : "-left-full"} lg:left-4 w-[230px] h-full overflow-y-auto z-10 bg-white transition-all`}>
        <nav>
          <span className="text-[#C7C2C4] text-[14px] font-bold">Dashboard</span>
          <ul className="pl-2">
            <li className="my-1">
              <NavLink to="" className="flex items-center gap-x-2 w-full text-[15px] p-1 rounded-md text-[#71727D] transition-colors hover:bg-[#F1F1FE]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Home
              </NavLink>
            </li>
            <li className="my-1">
              <a href="" className="flex items-center gap-x-2 w-full text-[15px] p-1 rounded-md text-[#71727D] transition-colors hover:bg-[#F1F1FE]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                </svg>
                Analytics
              </a>
            </li>
            <li className="my-1">
              <a href="" className="flex items-center gap-x-2 w-full text-[15px] p-1 rounded-md text-[#71727D] transition-colors hover:bg-[#F1F1FE]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                </svg>
                Sales
              </a>
            </li>
          </ul>
          <span className="text-[#C7C2C4] text-[14px] font-bold">Quick Menu</span>
          <ul className="pl-2">
            <li className="my-1">
              <NavLink to="users" className="flex items-center gap-x-2 w-full text-[15px] p-1 rounded-md text-[#71727D] transition-colors hover:bg-[#F1F1FE]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                Users
              </NavLink>
            </li>
            <li className="my-1">
              <NavLink to="NewUser" className="flex items-center gap-x-2 w-full text-[15px] p-1 rounded-md text-[#71727D] transition-colors hover:bg-[#F1F1FE]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                New User
              </NavLink>
            </li>
            <li className="my-1">
              <NavLink to="products" className="flex items-center gap-x-2 w-full text-[15px] p-1 rounded-md text-[#71727D] transition-colors hover:bg-[#F1F1FE]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>
                Products
              </NavLink>
            </li>
            <li className="my-1">
              <a href="#" className="flex items-center gap-x-2 w-full text-[15px] p-1 rounded-md text-[#71727D] transition-colors hover:bg-[#F1F1FE]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Transactions
              </a>
            </li>
            <li className="my-1">
              <a href="#" className="flex items-center gap-x-2 w-full text-[15px] p-1 rounded-md text-[#71727D] transition-colors hover:bg-[#F1F1FE]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                Reports
              </a>
            </li>
          </ul>
          <span className="text-[#C7C2C4] text-[14px] font-bold">Dashboard</span>
          <ul className="pl-2">
            <li className="my-1">
              <a href="" className="flex items-center gap-x-2 w-full text-[15px] p-1 rounded-md text-[#71727D] transition-colors hover:bg-[#F1F1FE]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Mail
              </a>
            </li>
            <li className="my-1">
              <a href="" className="flex items-center gap-x-2 w-full text-[15px] p-1 rounded-md text-[#71727D] transition-colors hover:bg-[#F1F1FE]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                Feedbacks
              </a>
            </li>
            <li className="my-1">
              <a href="" className="flex items-center gap-x-2 w-full text-[15px] p-1 rounded-md text-[#71727D] transition-colors hover:bg-[#F1F1FE]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                home
              </a>
            </li>
          </ul>
          <span className="text-[#C7C2C4] text-[14px] font-bold">Staff</span>
          <ul className="pl-2">
            <li className="my-1">
              <a href="" className="flex items-center gap-x-2 w-full text-[15px] p-1 rounded-md text-[#71727D] transition-colors hover:bg-[#F1F1FE]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                Manage
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

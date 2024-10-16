import React, { useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function Content() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  function sidebarOpenGEnerator() {
    setIsOpenSidebar((prevState) => !prevState);
  }

  return (
    <div className="relative">
      <Header onOpen={sidebarOpenGEnerator} sidebarOpen={isOpenSidebar} />
      <main className="flex relative py-2 px-4">
        <Sidebar sidebarOpen={isOpenSidebar} />
        <section className={`relative w-full transition-all ${isOpenSidebar === true ? "translate-x-[246px]" : "ml-[0px] pl-0"} lg:ml-[230px] lg:translate-x-0 lg:pl-4 text-justify`}>
          <Outlet />
        </section>
      </main>
    </div>
  );
}

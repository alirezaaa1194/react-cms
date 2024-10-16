import React, { useState } from "react";
import Content from "./components/Content";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

// export default function App() {
//   const router = useRoutes(routes);
//   return <div>{router}</div>;
// }

export default function App() {
  const router = useRoutes(routes);

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  function sidebarOpenGEnerator() {
    setIsOpenSidebar((prevState) => !prevState);
  }
  
  return (
    <div className="relative">
      <Header onOpen={sidebarOpenGEnerator} sidebarOpen={isOpenSidebar} />
      <main className="flex relative py-2 px-4">
        <Sidebar sidebarOpen={isOpenSidebar} />
        <section className={`relative w-full transition-all ${isOpenSidebar === true ? "translate-x-[246px]" : "ml-[0px] pl-0"} lg:ml-[230px] lg:translate-x-0 lg:pl-4 text-justify`}>{router}</section>
      </main>
    </div>
  );
}

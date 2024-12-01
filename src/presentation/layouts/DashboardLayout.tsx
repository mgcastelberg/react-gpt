import { Outlet } from "react-router-dom";
import { menuRoutes } from "../router/router";
import { SidebarMenuItem } from "../sidebar/SidebarMenuItem";

export const DashboardLayout = () => {
  return (
    <main className="flex flex-row mt-7">
      <nav className=" sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl">
        <h1 className="text-lg font-bold text-transparent lg:text-3xl bg-gradient-to-br from-white via-white/50 bg-clip-text">
          ReactGPT<span className="text-indigo-500">.</span>
        </h1>
        <span className="text-xl">Bienvenido</span>
        <div className="my-3 border border-gray-700" />
        
        {
            menuRoutes.map(option => (
                <SidebarMenuItem key={option.to} {...option} />
            ))
        }
        
      </nav>

      <section className="mx-3 sm:mx-20 flex flex-col w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-3xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};

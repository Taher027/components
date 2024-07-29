/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.jpg";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
export const SidebarContext = createContext();

const SideBar = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <aside className="h-screen px-3">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center  ">
            <img
              src={logo}
              alt="logo"
              className={`overflow-hidden transition-all ${
                open ? "w-36 " : "w-0"
              }`}
            />
            <button
              onClick={() => setOpen((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {open ? (
                <ChevronRight color="blue" size={30} strokeWidth={1.5} />
              ) : (
                <ChevronLeft color="blue" size={30} strokeWidth={1.5} />
              )}
            </button>
          </div>
          <SidebarContext.Provider value={{ open }}>
            <ul className="flex-1 px-3 justify-end">{children}</ul>
          </SidebarContext.Provider>

          <div className="border-t flex gap-3 p-3">
            <img
              src={profile}
              width={35}
              height={35}
              alt="profile-image"
              className="rounded-full"
            />
            <div
              className={`flex  justify-between items-center overflow-hidden transition-all  ${
                open ? "w-52 ml-3" : "w-0"
              }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Taher Hossain</h4>
                <span className="text-xs text-gray-600">
                  abutaher.bl.1927@gmail.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default SideBar;

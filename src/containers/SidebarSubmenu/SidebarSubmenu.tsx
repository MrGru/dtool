import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { MenuType } from "./types";

const SidebarSubmenu = ({ icon, name, submenu }: MenuType) => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (
      submenu?.filter((menu) => {
        return menu.path === location.pathname;
      })[0]
    ) {
      setIsExpanded(true);
    }
  }, []);
  return (
    <div className="flex-col">
      {/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
      <div className="w-full" onClick={() => setIsExpanded(!isExpanded)}>
        {icon} {name}
        <ChevronDownIcon
          className={`w-5 h-5 mt-1 float-right delay-400 duration-500 transition-all  ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>
      <div className={`w-full ${isExpanded ? "" : "hidden"}`}>
        <ul className="menu menu-compact">
          {submenu?.map((menu) => {
            return (
              <li key={menu.name}>
                <Link to={menu.path}>
                  {menu.icon} {menu.name}
                  {location.pathname === menu.path ? (
                    <span
                      className="absolute mt-1 mb-1 inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary "
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SidebarSubmenu;

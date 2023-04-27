import { themeChange } from "theme-change";
import React, { useEffect, useState } from "react";
import { BellIcon, Bars3Icon } from "@heroicons/react/24/outline";

import { NavLink, Routes, Link, useLocation } from "react-router-dom";

function Header() {
  const noOfNotifications = 0;
  const pageTitle = "";
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  useEffect(() => {
    themeChange(false);
    if (currentTheme === null) {
      if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
    // 👆 false parameter is required for react project
  }, []);

  // Opening right sidebar for notification
  const openNotification = () => {
    // dispatch(
    //   openRightDrawer({
    //     header: "Notifications",
    //     bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION,
    //   })
    // );
  };

  function logoutUser() {
    localStorage.clear();
    window.location.href = "/";
  }

  return (
    <>
      <div
        className="sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
  bg-base-100 text-base-content"
      >
        <nav className="navbar w-full">
          <div className="flex flex-1 md:gap-1 lg:gap-2">
            <label
              htmlFor="left-sidebar-drawer"
              className="btn btn-square btn-ghost drawer-button lg:hidden"
            >
              <Bars3Icon className="h-5 inline-block w-5" />
            </label>
            <h1 className="text-2xl font-semibold ml-2">Next test</h1>
          </div>
          <div className="flex-0">
            <select className="select select-sm mr-4" data-choose-theme>
              <option value="light">Default</option>
              <option value="dark">Dark</option>
              <option value="cupcake">Cupcake</option>
              <option value="bunblebee">Bunble Bee</option>
              <option value="emerald">Emerald</option>
              <option value="corporate">Corporate</option>
              <option value="synthwave">Synth Wave</option>
              <option value="retro">Retro</option>
              <option value="cyberpunk">Cyber punk</option>
              <option value="valentine">Valentine</option>
              <option value="halloween">Halloween</option>
              <option value="garden">Garden</option>
              <option value="forest">Forest</option>
              <option value="aqua">Aqua</option>
              <option value="lofi">Lofi</option>
              <option value="pastel">Pastel</option>
              <option value="fantasy">Fantasy</option>
              <option value="wireframe">Wireframe</option>
              <option value="black">Black</option>
              <option value="luxury">Luxury</option>
              <option value="dracula">Dracula</option>
              <option value="cmyk">Cmyk</option>
              <option value="autumn">Autumn</option>
              <option value="business">Business</option>
              <option value="acid">Acid</option>
              <option value="lemonade">Lemonade</option>
              <option value="night">Night</option>
              <option value="coffee">Coffee</option>
              <option value="winter">Winter</option>
            </select>
            <button
              className="btn btn-ghost ml-4  btn-circle"
              onClick={() => openNotification()}
            >
              <div className="indicator">
                <BellIcon className="h-6 w-6" />
                {noOfNotifications > 0 ? (
                  <span className="indicator-item badge badge-secondary badge-sm">
                    {noOfNotifications}
                  </span>
                ) : null}
              </div>
            </button>
            <div className="dropdown dropdown-end ml-4">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="justify-between">
                  <Link to={"/app/settings-profile"}>
                    Profile Settings
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li className="">
                  <Link to={"/app/settings-billing"}>Bill History</Link>
                </li>
                <div className="divider mt-0 mb-0" />
                <li>
                  {/* rome-ignore lint/a11y/useValidAnchor: <explanation> */}
                  <a onClick={logoutUser}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;

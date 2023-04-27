import routes from "@/routes/sidebar";
import { NavLink, useLocation } from "react-router-dom";

const LeftSideBar = () => {
  const location = useLocation();

  return (
    <div className="drawer-side">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay" />
      <aside className="bg-base-200 w-80">
        <div className="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden lg:flex">
          <a
            href="/"
            aria-current="page"
            aria-label="Homepage"
            className="flex-0 btn btn-ghost px-2"
          >
            <div className="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl">
              <span className="capitalize">Dev</span>
              <span className="text-base-content capitalize">Tools</span>
            </div>
          </a>
          <a
            href="/docs/changelog"
            className="link link-hover font-mono text-xs text-opacity-50"
          >
            <div data-tip="Changelog" className="tooltip tooltip-bottom">
              2.51.6
            </div>
          </a>
        </div>

        <div className="h-4" />

        {routes.map((route) => {
          if (route.submenu) {
            return (
              <ul className="menu menu-compact flex flex-col p-0 px-4">
                <li />
                <li className="menu-title">
                  <span>{route.name}</span>
                </li>
                {route.submenu.map((r) => {
                  return (
                    <li>
                      <NavLink
                        to={r.path}
                        end
                        className={({ isActive }) =>
                          `flex gap-4 ${isActive ? "active" : ""}`
                        }
                      >
                        <span className="flex-none">{r.icon}</span>
                        <span className="flex-1">{r.name}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            );
          }
          return (
            <ul className="menu menu-compact flex flex-col p-0 px-4">
              <li>
                <NavLink
                  to={route.path}
                  end
                  className={({ isActive }) =>
                    `flex gap-4 ${isActive ? "active" : ""}`
                  }
                >
                  <span className="flex-none">{route.icon}</span>
                  <span className="flex-1">{route.name}</span>
                </NavLink>
              </li>
            </ul>
          );
        })}
      </aside>
    </div>
  );
};

export default LeftSideBar;

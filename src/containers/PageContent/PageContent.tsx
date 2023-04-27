import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "@/routes";
import { Suspense, useRef } from "react";
import Header from "../Header";
import Page404 from "@/pages/Page404";

const PageContent = () => {
  const mainContentRef = useRef(null);
  return (
    <div className="drawer-content flex flex-col ">
      <Header />
      <main className="flex-1 overflow-y-auto pt-8 px-6" ref={mainContentRef}>
        <Suspense fallback={null}>
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  //   exact={true}
                  path={`${route.path}`}
                  element={<route.component />}
                />
              );
            })}

            {/* Redirecting unknown url to 404 page */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
        <div className="h-16" />
      </main>
    </div>
  );
};

export default PageContent;

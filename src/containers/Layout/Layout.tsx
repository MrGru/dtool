import LeftSideBar from "../LeftSideBar";
import PageContent from "../PageContent";

const Layout = () => {
  return (
    <>
      <div className="bg-base-100 drawer drawer-mobile">
        <input
          id="left-sidebar-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <PageContent />
        <LeftSideBar />
      </div>
    </>
  );
};

export default Layout;

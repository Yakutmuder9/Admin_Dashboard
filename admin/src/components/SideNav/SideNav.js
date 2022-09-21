import { useState, useEffect } from "react";
import { ProSidebar, SidebarHeader } from "react-pro-sidebar";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "react-pro-sidebar/dist/css/styles.css";
import './sideNav.css'
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


  return (
    <div className={menuCollapse ? "sideNavCollapsed" : "sideNavOpend "}>
      <ProSidebar
        collapsed={menuCollapse} id='prosliderContainer' className="bg-transparent p-0">
        <aside className="navbar-aside">
          <div className="aside-top w-100">
            <Link to="/dashboard" className="brand-wrap text-decoration-none">
              <SidebarHeader className=" overflow-hidden">
                <div className="logotext ">
                  <div>
                    {menuCollapse ? (
                      <div className="col shadow d-block" id="DashboardLogo">
                        <h1 className="ps-4">D</h1>
                      </div>
                    ) : (
                      <div
                        className="col shadow overflow-hidden d-flex h-100 w-100"
                        id="DashboardLogo"
                      >
                        <h3 className="ps-4 pt-3 pb-2 bolder overflow-hidden ">
                          Dashboard
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              </SidebarHeader>
            </Link>
          </div>

          <nav>
            <ul className="menu-aside ps-3 pt-2 w-100" id="sideNavBtn">

              <li className="menu-item ">
                <NavLink
                  activeClassName="active"
                  className="menu-link text-light d-flex align-items-center"
                  to="/dashboard"
                  exact={true}
                >
                  {menuCollapse ?
                    <i className="
                 material-icons ">dashboard</i> : <><i className="material-icons pe-3">dashboard</i><span className="text">Dashboard</span></>}
                </NavLink>
              </li>
              
              <li className="menu-item ">
                <NavLink
                  activeClassName="active"
                  className="menu-link text-light d-flex align-items-center"
                  to="/course"
                  exact={true}
                >
                  {menuCollapse ?
                    <span className="material-icons"> bookmark </span> : <><span className="material-icons me-3"> bookmark </span><span className="text">Course</span></>}
                </NavLink>
              </li>


              <li className="menu-item ">
                <NavLink
                  activeClassName="active"
                  className="menu-link text-light d-flex align-items-center"
                  to="/event"
                  exact={true}
                >
                  {menuCollapse ?
                    <span className="material-icons">move_to_inbox</span> : <><span className="material-icons me-3">move_to_inbox</span><span className="text">Calender</span></>}
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink
                  activeClassName="active"
                  className="menu-link text-light d-flex align-items-center"
                  to="/assessment"
                  exact={true}
                >
                  {menuCollapse ?
                    <span className="material-icons">event</span> : <><span className="material-icons me-3">event</span><span className="text">Create Test</span></>}
                </NavLink>
              </li>
              <li className="menu-item ">
                <NavLink
                  activeClassName="active"
                  className="menu-link text-light d-flex align-items-center"
                  to="/orders"
                  exact={true}
                >
                  {menuCollapse ?
                    <span className="material-icons">move_to_inbox</span> : <><span className='material-icons me-3'>task</span><span className="text">Orders</span></>}
                </NavLink>
              </li>
              {menuCollapse ? <h6
                className="w-100  overflow-hidden ps-2  my-3"
                id="acountDetailTx"
                variant="white"
              >Acc<br></br> Deti
              </h6> : <h6 className="w-100 ps-3 my-3"><hr></hr></h6>}
              <li className="menu-item ">
                <NavLink
                  activeClassName="active"
                  className="menu-link text-light d-flex align-items-center"
                  to="/inbox"
                  exact={true}
                >
                  {menuCollapse ?
                    <span className="material-icons">library_books</span> : <><span className="material-icons me-3">library_books</span><span className="text">Inbox</span></>}
                </NavLink>
              </li>
              <li className="menu-item">
                <NavLink
                  activeClassName="active"
                  className="menu-link text-light d-flex align-items-center"
                  to="/users"
                  exact={true}
                >
                  {menuCollapse ?
                    <span className="material-icons">account_circle</span> : <><span className="material-icons me-3">account_circle</span><span className="text">Students Profile</span></>}
                </NavLink>
              </li>
              <li className="menu-item mt-5 pt-5">
              </li>
              <li className="menu-item ">
                <NavLink
                  activeClassName="active"
                  className="menu-link text-light d-flex align-items-center"
                  to="/"
                  exact={true}
                >
                  {menuCollapse ?
                    <span className="material-icons">logout</span> : <><span className="material-icons me-3">logout</span><span className="text">Log Out</span></>}
                </NavLink>
              </li>
            </ul>
            <br />
            <br />
          </nav>
        </aside>
      </ProSidebar>
      <div className={menuCollapse ? "sidebarCloseToggler text-end pe-3 text-light py-1" : "sidebarOpenToggler text-end pe-3 text-light py-1"} onClick={menuIconClick}>
        {menuCollapse ? <FiArrowRight /> : <FiArrowLeft />}
      </div>
    </div>
  );
};

export default Sidebar;

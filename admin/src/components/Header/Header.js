import { FaBell, FaSistrix } from "react-icons/fa";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './head.css'
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail'


const Header = () => {
  const urlLocation = window.location.pathname.substring(1);

  // let fullName = user.displayName;
  // let shName = fullName.slice(0, 2);
  let shName = "Ya"

  function capitalizeFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  const urlLocationCapitalize = capitalizeFirstLetter(`${urlLocation}`);

  return (
    <div className="mydashheader sticky-top py-1 bg-light" id="topnavBar">
      <Navbar
        collapseOnSelect
        expand="xl"
        variant="dark"
        className="d-block d-lg-none  h-auto "
        id="naveToggler"
      >
        <Navbar.Brand href="#home" id="navLogo">
          <span >MyDashboard</span>
        </Navbar.Brand>

        <Navbar.Toggle
          className="text-top overflow-hidden pt-1 ps-2"
          aria-controls="responsive-navbar-nav"
          id="NavBtnBurger"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mt-4 bolder">

            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="event">Event</Nav.Link>

            <NavDropdown title="Courses" id="collasible-nav-dropdown">
              <NavDropdown.Item href="course">Bootstrap</NavDropdown.Item>
              <NavDropdown.Item href="course">React</NavDropdown.Item>
              <NavDropdown.Item href="course">Node Js</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="course">
                Web Architecture
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="Inbox">Inbox</Nav.Link>
            <Nav.Link href="resources">Resources</Nav.Link>
            <Nav.Link eventKey={2} href="/">
              Sign Out
            </Nav.Link>
          </Nav>
          <div className="text-end pe-5 overflow-visible" id="imageBody"><div className=""><img src='' id='dropImg' /></div></div>
        </Navbar.Collapse>
      </Navbar>

      <header
        className="navbar navbar-main d-none d-lg-block navbar-expand-lg p-1 px-3 "
        id="navbar_top"
      >
        <div className=" w-100 d-flex justify-content-between align-items-center">
          <div aria-label="breadcrumb " className="d-lg-block d-none">
            <h5 className="font-weight-bolder text-dark overflow-hidden">
              DashActivity
            </h5>
          </div>



          <div
            className="collapse navbar-collapse d-lg-flex justify-content-end mt-sm-0 me-md-0 me-sm-4 w-auto"
            id="navbar"
          >
            <div className="ms-md-auto pe-md-3 d-flex align-items-center">
              <div className="input-group">
                <input
                  type="text"
                  className=" form-control bg-transparent text-white rounded"
                  placeholder="Type here..."
                />
                <span className="input-group-text text-body text-primary navSerchBtn">
                  <FaSistrix aria-hidden="true" className="text-white" />
                </span>
              </div>
            </div>
            <ul className="navbar-nav justify-content-end">

              
                <Badge badgeContent={4} color="secondary" className="mt-2 mx-1">
                  <MailIcon color="action" />
                </Badge>
             
              <div className="d-flex px-3 h-100 align-items-end">
                <span className="text-secondary pt-2">Hi! {shName}</span>
              </div>
          


            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

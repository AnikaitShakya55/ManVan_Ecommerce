import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Store/Auth-Context";
import CartContext from "../../Store/CartContext";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import UserProfile from "../Profile/UserProfile";
import logo from "../../Assests/logo.png";
import "./NavBar.Module.css";

const NavBar = (props) => {
  const ctx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleCartClick = () => {
    if (authCtx.isLoggedIn) {
      props.cartShowHandler();
    } else {
      navigate("/login", { replace: true });
    }
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/login", { replace: true });
    alert(
      "Your email has been logged out successfully. Thank you for using our service"
    );
  };

  return (
    <>
      <Navbar expand="sm" className="navbar-control" expanded={expanded}>
        <Container>
          <Navbar.Brand className="brand">
            <img src={logo} alt="logo" /> MEN VAN
          </Navbar.Brand>

          <FaBars
            className="hamburger-icon"
            onClick={() => setSidebarOpen(true)}
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-details">
              <NavLink
                to="/home"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Products
              </NavLink>
              <NavLink
                to="/about"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Contact
              </NavLink>
            </Nav>
            <div className="navButtonsContainer">
              <div className="cart-button" onClick={handleCartClick}>
                <FaShoppingCart className="cart-icon" />
                {authCtx.isLoggedIn && (
                  <span className="cart-badge">{ctx.totalquantity}</span>
                )}
                {!authCtx.isLoggedIn && <span className="cart-badge">0</span>}
              </div>

              <div>
                {!authCtx.isLoggedIn ? (
                  <Button
                    className="login-button"
                    onClick={() => {
                      navigate("/login", { replace: true });
                      setExpanded(false);
                    }}
                  >
                    <FaUser className="nav-icon" /> Login
                  </Button>
                ) : (
                  <Button
                    className="login-button"
                    onClick={() => {
                      logoutHandler();
                      setExpanded(false);
                    }}
                  >
                    <FaUser className="nav-icon" /> Logout
                  </Button>
                )}
              </div>

              <div className="profile-Button">
                <UserProfile />
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <FaTimes className="close-icon" onClick={() => setSidebarOpen(false)} />

        {/* Profile Image */}
        <div className="sidebar-profile">
          <UserProfile />
        </div>

        {/* Navigation Links */}
        <Nav className="sidebar-links">
          <NavLink
            to="/home"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="#"
            className="nav-link"
            onClick={() => setSidebarOpen(false)}
          >
            <div className="cart-button" onClick={handleCartClick}>
              <FaShoppingCart className="cart-icon" />
              {authCtx.isLoggedIn ? (
                <span className="cart-badge">{ctx.totalquantity}</span>
              ) : (
                <span className="cart-badge">0</span>
              )}
            </div>
          </NavLink>
        </Nav>

        {/* Login/Logout Button */}
        <div className="sidebar-buttons">
          {!authCtx.isLoggedIn ? (
            <Button
              className="login-button"
              onClick={() => navigate("/login", { replace: true })}
            >
              <FaUser className="nav-icon" /> Login
            </Button>
          ) : (
            <Button className="login-button" onClick={logoutHandler}>
              <FaUser className="nav-icon" /> Logout
            </Button>
          )}
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="overlay" onClick={() => setSidebarOpen(false)} />
      )}
    </>
  );
};

export default NavBar;

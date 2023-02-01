import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { RxSlash } from "react-icons/rx";
import { Link } from "react-router-dom";

import "./NewNavbar.css";

const NewNavbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="app__navbar">
      <Link to="/" className="navbar-mainheader link pointer">
        FakeStore
      </Link>
      {/* for laptop view */}
      <div className="navbar-btns">
        <Link to="/about" className="navbar-btn pointer link">
          About
        </Link>
        <Link to="/signin" className="navbar-btn pointer link">
          Sign-In
        </Link>
        <RxSlash className="slash" />
        <Link to="/login" className="navbar-btn pointer link">
          Log-In
        </Link>

        {/* for mobile view */}
        <div className="navbar_mobile-menubtn pointer">
          {open ? (
            <div className="navbar_mobile-overlay">
              <RxCross2
                className="cross pointer"
                onClick={() => {
                  setOpen(false);
                }}
              />
              <ul className="app__navbar-overlay-links">
                <li>
                  <Link
                    onClick={() => {
                      setOpen(false);
                    }}
                    to="/about"
                    className="navbar_mobile-links pointer link"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setOpen(false);
                    }}
                    to="/signin"
                    className="navbar_mobile-links pointer link"
                  >
                    Sign-In
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={() => {
                      setOpen(false);
                    }}
                    to="/login"
                    className="navbar_mobile-links pointer link"
                  >
                    Log-In
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <GiHamburgerMenu
              onClick={() => {
                setOpen(true);
              }}
              className="hamburger pointer"
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;

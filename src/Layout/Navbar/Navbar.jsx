import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-topber">
      <div className="container overflow-visible ">
        <div className="topbar-content flex justify-center gap-x-40">
          <div className="contact-content flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="contact-img w-5 h-5 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <div className="contact-number">+001234567890</div>
          </div>
          <div id="button" className="topber-left-menu flex">
            <div className="text-block-6">
              Get 50% Off on Selected Items&nbsp; &nbsp;| &nbsp;&nbsp;
              <a href="#">
                {" "}
                <u>Shop Now</u>
              </a>
            </div>
          </div>
          <div className="topber-menu flex gap-10">
            <div className="dropdown flex">
              <div>
                <p className="dropbtn">Eng &nbsp;</p>
              </div>
              <div className="pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <div id="myDropdown" className="dropdown-content">
                <a href="#">Bangla</a>
                <a href="#">Arabic</a>
                <a href="#">Urdu</a>
              </div>
            </div>
            <div className="dropdown flex">
              <div>
                <p className="dropbtn">Location &nbsp;</p>
              </div>
              <div className="pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <div id="myDropdown" className="dropdown-content">
                <a href="#">Dhaka</a>
                <a href="#">India</a>
                <a href="#">Usa</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

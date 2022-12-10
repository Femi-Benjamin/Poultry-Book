import React from "react";
import "./Nav.css"

const Nav = () => {
  return (
    <nav className="shadow h-[120px] w-screen md:h-[100px] text-black bg-[#FFFFF0]">
      <div className="md:px-[120px]">
        <div className="h-[100px] flex justify-between items-center font-poppins">
          <div>
            <h1 className="not-italic font-semibold text-[32px] leading-[52px] pb-1">
              PoultryBook
            </h1>
          </div>

          <div className="not-italic font-[400px] text-[20px] leading-[36px]">
            <ul className="hidden md:flex justify-between items-center gap-[40px] cursor-pointer not-italic">
              <li className="font-semibold">Home</li>
              <li>Services</li>
              <li>About</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <button className="w-[185px] h-[54px] bg-[#9E373D] rounded-[4px] text-white not-italic font-[400px] text-[24px] leading-[38px]">
                Get started  
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

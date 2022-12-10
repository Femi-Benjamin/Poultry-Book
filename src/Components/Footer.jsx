import React from "react";

const Footer = () => {
  return (
    <div className="h-[640px] bg-[#CB6B28]">
      <div className="md:px-[120px] md:py-[88px]">
        <div className="flex justify-between font-poppins text-white">
          {/* ONE */}
          <div>
            <h1 className="not-italic font-semibold text-[32px] leading-[52px] mb-[90.48px]">
              PoultryBook
            </h1>
            <img className="mb-[90.48px]" src="/Frame 25.png" alt="" />
            <div className="not-italic font-normal text-[24px] leading-[38px]">
              <div className="flex gap-5 mb-[90.48px]">
                <p>Terms</p>
                <p>Privacy policy</p>
              </div>
              <p>2022 PoultryBook</p>
            </div>
          </div>
          {/* TWO */}
          <div>
            <h1 className="not-italic font-semibold text-[32px] leading-[52px] mb-[40px]">
              NAVIGATE
            </h1>
            <div className="not-italic font-normal text-[24px] leading-[38px]">
              <p className="mb-[40px]">Home</p>
              <p className="mb-[40px]">Services</p>
              <p className="mb-[40px]">About Us</p>
              <p className="mb-[40px]">FAQ</p>
              <p>Contact Us</p>
            </div>
          </div>
          {/* THREE */}
          <div>
            <h1 className="not-italic font-semibold text-[32px] leading-[52px] mb-[90.48px]">
              LINKS
            </h1>
            <div className="not-italic font-normal text-[24px] leading-[38px]">
              <p className="mb-[40px]">Contact Us</p>
              <p className="mb-[40px]">Subscribe for updates</p>
              <p>Help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Nav from "../NavBar/Nav";
import Core from "../Components/Core";
import Service from "../Components/Service";
import PoultryBk from "../Components/PoultryBk";
import FAQ from "../Components/FAQ";
import Review from "../Components/Review";
import Customers from "../Components/Customers";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="h-[875px] w-screen">
        <div className="md:px-[198.5px]">
          <div className="flex justify-between">
            <div className="text-[#350000] font-poppins">
              <h1 className="not-italic font-medium text-[64px] leading-[83px] mt-[294px] mb-[8px]">
                PoultryBook
              </h1>
              <p className="not-italic font-[400px] text-[32px] leading-[48px]">
                Production & Mentorship
              </p>
              <p className="not-italic font-[400px] text-[18px] leading-[30px] text-center mb-[20px]">
                We take pride in providing poultry <br /> products such as eggs
                & healthy chicken <br /> to cater for the needs of our
                custormers <br /> while also providing mentorship.
              </p>
              <button className="w-[392px] h-[50px] bg-[#CB6B28] rounded-[4px] text-[white] not-italic font-[400px] text-[18px] leading-[30px] shadow-inner">
                Make Purchase Order
              </button>
            </div>
            <img
              className="h-[77px] relative top-[548px] "
              src="/image 1.png"
              alt=""
            />
            <img className="mt-[162px]" src="/Group 36.png" alt="" />
          </div>

          <div className="flex justify-between cursor-pointer mt-[60px]">
            <img src="/Partner Logo.png" alt="" />
            <img src="/Partner Logo (1).png" alt="" />
            <img src="/Partner Logo (2).png" alt="" />
            <img src="/Partner Logo (3).png" alt="" />
          </div>
        </div>
      </div>
      <Core />
      <Service/>
      <PoultryBk/>
      <FAQ/>
      <Review/>
      <Customers/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;

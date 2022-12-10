import React from "react";

const Customers = () => {
  return (
    <div className="h-[948px] bg-white">
      <div className="md:px-[120px] md:py-[88px]">
        <h1 className="not-italic font-poppins font-semibold text-[32px] leading-[52px] text-center mb-[40px]">
          Hear what our customers have to say
        </h1>
        <>
          <div className="flex flex-col items-center">
            <img className="mb-[16px]" src="/image.png" alt="" />
            <p className="not-italic font-poppins font-normal text-[18px] leading-[30px] text-center mb-[16px]">
              PoultryBook has <br /> consistently met my <br /> needs even
              beyond my <br />
              expectations. Deliveries <br /> are always timely{" "}
            </p>
            <img className="cursor-pointer" src="/Frame 63.png" alt="" />
          </div>
        </>

        <div className="mt-[88px]">
          <h1 className="mb-[40px] not-italic font-poppins font-semibold text-[32px] leading-[52px] text-center">
            Meet our Partners
          </h1>
          <div className="flex justify-center">
            <img src="/Frame 76.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;

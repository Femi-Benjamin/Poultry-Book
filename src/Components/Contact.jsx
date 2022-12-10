import React from "react";

const Contact = () => {
  return (
    <div className="h-[768px] bg-white">
      <div className="md:px-[150px]  md:py-[88px]">
        <div className="flex flex-col items-center font-poppins">
          <h1 className="not-italic font-semibold text-[32px] leading-[52px] mb-[32px]">
            Contact Us
          </h1>
          <p className="not-italic font-normal text-[18px] leading-[30px] text-center mb-[40px]">
            Are you interested in our services and products? Do you want to make
            some special arrangements for the products and services we <br />{" "}
            offer? Do you need more clarity on some areaes? Our team or seasoned
            experts are ever to get you good value for your money, <br /> make a
            flexible arrangement for you and give clarity on areas you need them
            all you have to do is reach out to us via button below. <br />{" "}
          </p>

          <button className="w-[378px] h-[50px] mb-[40px] bg-[#9E373D] rounded-[4px] not-italic font-normal text-[18px] leading-[30px] text-white">
            Contact Agent
          </button>

          <p className="not-italic font-normal text-[18px] leading-[30px] text-center mb-[60px]">
            Will you like to get firsthand informations about our promo deals,
            bonaznas and special packages or you would like to stay ahead of{" "}
            <br /> the curve with our tips on season changes, market demands and
            how to ride it? Kindly fill the form below.{" "}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="border border-dashed border-[#CB6B28] w-[582px] h-[140px] font-poppins">
            <div className="flex border-b border-[#CB6B28] justify-center pt-5">
              <h1 className="w-[103px] h-[46px] bg-[#FFE3A0] text-center p-3 font-medium text-[18px] leading-[30px]">
                Email
              </h1>
              <input
                className="w-[431px] h-[46px] bg-white p-2 placeholder:font-normal placeholder:text-[18px] placeholder:text-[#969696] "
                type="text"
                id="email"
                placeholder="@gmail.com"
              />
            </div>

            <div className="flex border-[#FFE3A0] justify-center">
              <h1 className="w-[103px] h-[46px] bg-[#FFE3A0] text-center p-2 font-medium text-[18px] leading-[30px]">
                Name
              </h1>
              <input
                className="w-[431px] h-[46px] bg-white p-2 placeholder:font-normal placeholder:text-[18px] placeholder:text-[#969696]"
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

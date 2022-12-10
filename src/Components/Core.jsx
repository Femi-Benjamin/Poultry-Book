import React from "react";
import "./Core.css";

const Core = () => {
  return (
    <div className="h-[875px] w-screen bg-white">
      <div className="md:px-[110px] py-[50px]">
        <div className="text-[#620001] font-poppins text-center">
          <h1 className="not-italic font-semibold text-[32px] leading-[52px] mb-[16px]">
            Core Components
          </h1>
          <p className="not-italic font-[400px] text-[18px] leading-[30px] mb-[80px]">
            At PoultryBook, we seek to function at the topmost levels while
            exploring means and ways of even improving our already topnotch{" "}
            <br />
            services and thereby satisfying our customers in ways previously
            unimaginable and generally raising the bars for every other <br />{" "}
            provider of similar services. Our core components are as seen below.
          </p>
        </div>

        <div className="flex justify-around mb-[80px]">
          {/* CARD 1 */}
          <div className="egg w-[253px] h-[322px] bg-white rounded-[8px] font-poppins text-black text-center">
            <img
              className="ml-[105px] pt-[16px] mb-[16px]"
              src="/Egg icon.png"
              alt=""
            />
            <h1 className="not-italic font-semibold text-[24px] leading-[38px] mb-[16px]">
              Egg Production
            </h1>
            <p className="p-3 not-italic font-normal text-[18px] leading-[30px]">
              PoultryBook engage the services of seasoned staff thus we
              seamlessly produce wholesome and nourishing eggs for our daily
              needs{" "}
            </p>
          </div>

          {/* CARD 2 */}
          <div className="egg w-[253px] h-[322px] bg-[#FFE3A0] rounded-[8px] font-poppins text-black text-center">
            <img
              className="ml-[105px] pt-[16px] mb-[16px]"
              src="/Egg icon (1).png"
              alt=""
            />
            <h1 className="not-italic font-semibold text-[24px] leading-[38px] mb-[16px]">
              Chicken Sale
            </h1>
            <p className="p-3 not-italic font-normal text-[18px] leading-[30px]">
              PoultryBook is in art of breeding and growing a healthy crop of
              chicken both at the baby chick stage and adult stage.{" "}
            </p>
          </div>

          {/* CARD 3 */}
          <div className="egg w-[253px] h-[322px] bg-white rounded-[8px] font-poppins text-black text-center">
            <img
              className="ml-[105px] pt-[16px] mb-[16px]"
              src="/Egg icon (2).png"
              alt=""
            />
            <h1 className="not-italic font-semibold text-[24px] leading-[38px] mb-[16px]">
              Mentorship
            </h1>
            <p className="p-3 not-italic font-normal text-[18px] leading-[30px]">
              At PoultryBook, we provide mentorship to new poultry farmers who
              are interested in seeking guidance and knowledge from us.{" "}
            </p>
          </div>
        </div>

        <h1 className="text-center font-poppins not-italic font-normal text-[18px] leading-[30px] text-[#141414]">
          At PoultryBook, we provide services which revolve around the
          components listed above namely; egg production, chicken sale and <br />
          mentorship. These components are meant to meet the needs of our
          custormers in a satisfying and seamless manner.
        </h1>
      </div>
    </div>
  );
};

export default Core;

import React from "react";

const Service = () => {
  return (
    <div className="h-[1500px] w-screen bg-white">
      <div className="md:px-[110px] py-[50px]">
        <div className="text-center text-black font-poppins">
          <h1 className="not-italic font-semibold text-[32px] leading-[52px] mb-[24px]">
            Our Services{" "}
          </h1>
          <p className="not-italic font-normal text-[18px] leading-[30px]">
            Below is a list of products and services we offer. Our seasoned team
            of experts are ever ready to give you good value for your money{" "}
            <br /> as your satisfaction is our paramount concern.{" "}
          </p>
        </div>
      </div>

      <div className="bg-[#FFE3A0] px-[123px] h-[134px] font-poppins">
        <h1 className="not-italics font-semibold text-[24px] leading-[38px] pt-[10px] mb-[16px]">
          Sales & Distribution of Eggs{" "}
        </h1>
        <p className="not-italic font-normal text-[18px] leading-[30px]">
          We sell eggs in wholesale and retail quantities at affordable prices.
          We also provide distribution services which is a paid <br /> service
          depending on the quantity of demand.
        </p>
      </div>
      <div className="bg-[#FFCF8C] px-[123px] h-[164px] font-poppins">
        <h1 className="not-italics font-semibold text-[24px] leading-[38px] pt-[10px] mb-[16px]">
          Sales & Distribution of Layers
        </h1>
        <p className="not-italic font-normal text-[18px] leading-[30px]">
          Sales of layers including Day old, Pullet and even adult chicken. Our
          crop of chicken are haelthy as they are been cared <br /> for by
          seasoned personnels with adequately curated knowledge and many years
          of experience.
        </p>
      </div>
      <div className="bg-[#FFE3A0] px-[123px] h-[164px] font-poppins">
        <h1 className="not-italics font-semibold text-[24px] leading-[38px] pt-[10px] mb-[16px]">
          Mentorship of New Poultry Farmers
        </h1>
        <p className="not-italic font-normal text-[18px] leading-[30px]">
          We provide a range of mentoship programs which are namely; Basic,
          Intermediate & Advance. Below are cards <br /> showing detailed
          information regarding the various programs.
        </p>
      </div>

      <div className="flex justify-around mt-[80px]">
        {/* CARD1 */}
        <div className="egg w-[253px] h-[360px] bg-white rounded-[8px] font-poppins text-black text-center">
          <img
            className="ml-[105px] pt-[16px] mb-[16px]"
            src="/iconn.png"
            alt=""
          />
          <h1 className="not-italic font-medium text-[24px] leading-[38px]">
            Basic
          </h1>
          <h1 className="not-italic font-medium text-[24px] leading-[38px]">
            $100
          </h1>

          <p className="p-3 not-italic font-normal text-[18px] leading-[30px]">
            This packages will help you master the foundation of poulttry
            farming & early layer life till it begins to lay eggs. It lasts for
            6weeks{" "}
          </p>
        </div>

        {/* CARD2 */}
        <div className="egg w-[253px] h-[360px] bg-[#FFE3A0] rounded-[8px] font-poppins text-black text-center">
          <img
            className="ml-[105px] pt-[16px] mb-[16px]"
            src="/icon1.png"
            alt=""
          />
          <h1 className="not-italic font-medium text-[24px] leading-[38px]">
            Intermediate
          </h1>
          <h1 className="not-italic font-medium text-[24px] leading-[38px]">
            $150
          </h1>
          <p className="p-3 not-italic font-normal text-[18px] leading-[30px]">
            Intermediate packages covers the Foundation of poultry farming and
            the varioys Life stages of layers. It lasts for 12weeks{" "}
          </p>
        </div>

        {/* CARD3 */}
        <div className="egg w-[253px] h-[360px] bg-white rounded-[8px] font-poppins text-black text-center">
          <img
            className="ml-[105px] pt-[16px] mb-[16px]"
            src="/iicon.png"
            alt=""
          />
          <h1 className="not-italic font-medium text-[24px] leading-[38px]">
            Advanced
          </h1>
          <h1 className="not-italic font-medium text-[24px] leading-[38px]">
            $200
          </h1>
          <p className="p-3 not-italic font-normal text-[18px] leading-[30px]">
            This package covers the Foundation of poultry farming, life stages
            of layers and the business practice related It lasts for 18weeks{" "}
          </p>
        </div>
      </div>

      <h1 className="not-italic font-normal text-[20px] leading-[30px] px-[123px] text-center  mt-[80px] ">
        Are you interested in purchasing your eggs & chicken be it in retail or
        in bulk? or your are interested in learning from our seasoned <br />{" "}
        personnels on how to engage the most efficient and effective poultry
        faming practices, kindly do these via the buttons below
      </h1>

      <div className="flex gap-[50px] justify-center">
        <button className="w-[378px] h-[50px] mt-[25px] bg-[#9E373D] rounded-[4px] not-italic font-normal text-[18px] leading-[30px] text-white">Make Purchase</button>
        <button className="w-[361px] h-[50px] mt-[25px] border border-[#9E373D]  rounded-[4px] not-italic font-normal text-[18px] leading-[30px] text-[#9E373D]">Contact Personnel</button>
      </div>
    </div>
  );
};

export default Service;

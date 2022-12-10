import React from "react";

const FAQ = () => {
  return (
    <div className="h-[868px] bg-[#CB6B28]">
      <div className="md:px-[120px] md:py-[88px]">
        <h1 className="text-center font-poppins font-medium text-[32px] leading-[52px] text-white mb-[40px]">
          Frequently Asked Questions
        </h1>

        <div className="flex justify-between">
          <div>
            <h1 className="not-italics font-normal text-[20px] leading-[30px] text-white mb-[40px]">
              Are you new here and have some questions you would like to be
              answered to give you <br /> clearity on some things, below are
              some of the questions and answers that may help.{" "}
            </h1>



            <div className="flex justify-between items-center cursor-pointer">
              <h1 className="not-italics font-normal text-[20px] leading-[30px] text-white mb-[25px]">
                {" "}
                1. How do I get started with the mentorship program?
              </h1>
              <img className="h-[7.64px] mb-3" src="/Vector.png" alt="" />
            </div>



            <div className="egg w-[790px] h-[110px] bg-[#F5F5F5] rounded-[4px] mb-[30px]">
              <h1 className="not-italic font-normal p-3 text-[20px] leading-[30px] text-black">
                There’s no special requirements for you to aside contacting us,
                infroming us about the package you want to subscribe and make
                payments. Don’t forget that classes may involve both online and
                physical sessions.{" "}
              </h1>
            </div>




            <div className="flex  justify-between items-center border-b cursor-pointer">
              <h1 className="not-italics font-normal text-[20px] leading-[30px] text-white mb-[25px] ">
                {" "}
                2. Is there a location barrier in sales and delivary of eggs and
                chicken?
              </h1>
              <img className="h-[7.64px] mb-3" src="/Vector.png" alt="" />
            </div>




            <div className="flex  justify-between items-center border-b cursor-pointer">
              <h1 className="not-italics font-normal text-[20px] leading-[30px] text-white mb-[25px] ">
                {" "}
                3.Do you notify your customers about price changes before hand?
              </h1>
              <img className="h-[7.64px] mb-3" src="/Vector.png" alt="" />
            </div>




            <div className="flex  justify-between items-center border-b cursor-pointer">
              <h1 className="not-italics font-normal text-[20px] leading-[30px] text-white mb-[25px] ">
                {" "}
                4. Is the transportation cost paid seperately?
              </h1>
              <img className="h-[7.64px] mb-3" src="/Vector.png" alt="" />
            </div>




            <div className="flex  justify-between items-center border-b cursor-pointer">
              <h1 className="not-italics font-normal text-[20px] leading-[30px] text-white mb-[25px] ">
                {" "}
                5. is transportation cost dependent on quantity of products
                purchased?
              </h1>
              <img className="h-[7.64px] mb-3" src="/Vector.png" alt="" />
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="egg w-[380px] h-[566px] rounded-[8px] bg-white font-poppins px-[24px]">
            <h1 className="not-italic font-medium text-[24px] leading-[38px] text-center mt-[40px] mb-[22px]">
              Other Questions?
            </h1>
            <p className="text-center font-normal text-[18px] leading-[30px]">
              You have seen some questions frequently asked by customers and you
              have also seen the answers and responses which we believe would
              help clarify some of your questions. You may reach out to us via
              the button below incase you have some other questions or you want
              to make some peculiar arrangements and would like to speak to our
              agent on how to get it sorted. Remember we’re here for your
              satisfaction.
            </p>
            <div className="flex justify-center">
              <button className="w-[216px] h-[46px] mt-[25px] border border-[#9E373D]  rounded-[4px] not-italic font-normal text-[18px] leading-[30px] text-[#9E373D]">
                Contact Personnel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

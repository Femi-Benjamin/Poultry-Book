import React from "react";

const Review = () => {
  return (
    <div className="h-[768px] bg-[white]">
      <div className="md:px-[155px]  md:py-[88px]">
        <h1 className=" not-italic font-poppins font-semibold text-[32px] leading-[52px] text-center mb-[40px]">
          Take a Quick view
        </h1>

        <div className="flex justify-between">
          <div className="egg w-[380px] h-[500px] bg-white rounded-[8px]">
            <img className="p-1 pt-3 mb-[16px]" src="/image 2.png" alt="" />
            <div className="px-[20px] font-poppins">
              <h1 className="not-italic font-semibold text-[24px] leading-[28px] mb-[16px]">
                Healthy Layers{" "}
              </h1>
              <p className="not-italic font-normal text-[18px] leading-[30px]">
                We take pride in production of quality eggs and chicken to
                satisfy the needs of all our customers in different areas kslkn,
                woejlndsnkd pqkwndas lknqw dnklnqwd klqnwd knwq.
              </p>
            </div>
          </div>

          <div className="egg w-[380px] h-[500px] bg-[#FFE3A0] rounded-[8px]">
            <img className="p-1 pt-3 mb-[16px]" src="/image 5.png" alt="" />
            <div className="px-[20px] font-poppins">
              <h1 className="not-italic font-semibold text-[24px] leading-[28px] mb-[16px]">
                Wholesome Eggs{" "}
              </h1>
              <p className="not-italic font-normal text-[18px] leading-[30px]">
                We take pride in production of quality wholesome eggs to satisfy
                the needs of all our customers in different areas both on retail
                scale and whoselsale scale all at affordable rates.
              </p>
            </div>
          </div>

          <div className="egg w-[380px] h-[500px] bg-white rounded-[8px]">
            <img className="p-1 pt-3 mb-[16px]" src="/image 4.png" alt="" />
            <div className="px-[20px] font-poppins">
              <h1 className="not-italic font-semibold text-[24px] leading-[28px] mb-[16px]">
                Mentorship{" "}
              </h1>
              <p className="not-italic font-normal text-[18px] leading-[30px]">
                We provide various flexible mentorship program ranging from
                basic all the way to advanced all at affordable rates. The
                program guarantees maximum return on money
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

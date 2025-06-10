import ProgressBar from "@/app/components/appComponents/progressBar";
import Image from "next/image";
import React from "react";

export default function teamMember() {
  return (
    <div className="mx-auto w-full">
      <div className="w-full h-[10px] top-[4.4rem] fixed z-40  bg-[#E7E7E7]" />
      <div className="flex w-full px-3 sm:px-8 ">
        <div className="bg-[#FFFFFF] mt-5  sm:mt-8  w-full  flex justify-between items-center">
          <div
            className="sm:text-[28px] text-[20px] text-[#000000] !font-helvetica"
            style={{ fontWeight: 400 }}
          >
            Barbarella Smithson
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[153px] h-[36px] bg-[rgba(240,240,240,1)] rounded flex justify-between p-3 items-center">
              <span
                className="sm:text-[14px] text-[12px] text-[#000000]"
                style={{ fontWeight: 400 }}
              >
                December 2025
              </span>
              <Image
                src="/images/Icon_Dropdown.png"
                alt="combined_shape_Icon"
                width={11}
                height={9}
                className="ml-1.5 "
              />
            </div>
            <div className="w-[26px] h-[26px] sm:w-[36px] sm:h-[36px]  relative">
              <Image
                src="/images/IconAdd.png"
                alt="combined_shape_Icon"
                fill
                className="object-contain ml-1.5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* container design - desktop and tablet */}
      <div className=" hidden sm:flex md:flex lg:flex flex-row  h-full mt-8 justify-between items-center bg-[#FFFFFF] px-3 sm:px-8 my-5  ">
        <div className="flex flex-col cursor-pointer  p-3  bg-[rgba(243,146,0,1)]   w-[210px] h-[104px] justify-center items-center rounded-md ">
          <p className="text-[#FFFFFF] text-[10px] sm:text-[13px]  font-Figtree font-semibold ">
            TARGET HOURS
          </p>
          <p className="text-[#FFFFFF] text-[25px] sm:text-[38px] font-Figtree font-medium ">
            300
          </p>
        </div>

        <div className="w-7" />
        <div className="flex flex-col cursor-pointer  p-3  bg-[rgba(38,156,205,1)]   w-[210px] h-[104px] justify-center items-center rounded-md ">
          <p className="text-[#FFFFFF] text-[10px] sm:text-[13px]  font-Figtree font-semibold ">
            LOGGED HOURS
          </p>
          <p className="text-[#FFFFFF] text-[25px] sm:text-[38px] font-Figtree font-medium ">
            0
          </p>
        </div>
        <div className="w-7" />
        <div className="flex flex-col cursor-pointer  p-3  bg-[rgba(35,129,169,1)]   w-[210px] h-[104px] justify-center items-center rounded-md ">
          <p className="text-[#FFFFFF] text-[10px] sm:text-[13px]  font-Figtree font-semibold ">
            BILLABLE HOURS
          </p>
          <p className="text-[#FFFFFF] text-[25px] sm:text-[38px] font-Figtree font-medium ">
            0
          </p>
        </div>
        <div className="w-7" />
        <div className="flex flex-col cursor-pointer  p-3  bg-[rgba(11,88,120,1)]    w-[210px] h-[104px] justify-center items-center rounded-md ">
          <p className="text-[#FFFFFF] text-[10px] sm:text-[13px]  font-Figtree font-semibold ">
            UNDER/OVER
          </p>
          <p className="text-[#FFFFFF] text-[25px] sm:text-[38px] font-Figtree font-medium ">
            0
          </p>
        </div>
      </div>

      {/*  container design - mobile */}
      <div className=" flex-col    h-full justify-center items-center bg-[#FFFFFF] my-5 px-3 block sm:hidden ">
        <div className="flex flex-row w-full justify-center items-center ">
          <div className="flex flex-col cursor-pointer bg-[rgba(243,146,0,1)]    w-[240px] h-[104px] justify-center items-center rounded-md ">
            <p className="text-[#FFFFFF] font-Figtree font-semibold ">
              TARGET HOURS
            </p>
            <p className="text-[#FFFFFF] text-[38px]  font-Figtree font-medium ">
              300
            </p>
          </div>
          <div className="w-7" />
          <div className="flex flex-col cursor-pointer bg-[rgba(38,156,205,1)]    w-[240px] h-[104px] justify-center items-center rounded-md ">
            <p className="text-[#FFFFFF]  font-Figtree font-semibold ">
              LOGGED HOURS
            </p>
            <p className="text-[#FFFFFF] text-[38px]  font-Figtree font-medium ">
              0
            </p>
          </div>
        </div>
        <div className="w-7" />
        <div className="flex flex-row w-full mt-5 justify-center items-center ">
          <div className="flex flex-col cursor-pointer bg-[rgba(35,129,169,1)]   w-[240px] h-[104px] justify-center items-center rounded-md ">
            <p className="text-[#FFFFFF]  font-Figtree font-semibold ">
              BILLABLE HOURS
            </p>
            <p className="text-[#FFFFFF] text-[38px]  font-Figtree font-medium ">
              0
            </p>
          </div>
          <div className="w-7" />
          <div className="flex flex-col cursor-pointer bg-[rgba(11,88,120,1)]    w-[240px] h-[104px] justify-center items-center rounded-md ">
            <p className="text-[#FFFFFF]  font-Figtree font-semibold ">
              UNDER/OVER
            </p>
            <p className="text-[#FFFFFF] text-[38px]  font-Figtree font-medium ">
              0
            </p>
          </div>
        </div>
      </div>

      {/* progress bars */}
      <div className="px-3 sm:px-8">
        <ProgressBar
          totalHours={320}
          completedHours={225}
          loggedPercent={8}
          billablePercent={6}
        />
      </div>
    </div>
  );
}

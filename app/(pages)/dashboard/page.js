import CommonHeader from "@/app/components/appComponents/commonHeader";
import ProgressBar from "@/app/components/appComponents/progressBar";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="mx-auto ">
      <div className="w-full h-[10px] top-[4.4rem] fixed z-40  bg-[#E7E7E7]" />
      <div className="flex w-full px-8 ">
        <div className="bg-[#FFFFFF]  mt-8  w-full  flex justify-between items-center">
          <div
            className="text-[28px] text-[#000000] !font-helvetica"
            style={{ fontWeight: 400 }}
          >
            August 2025 Timesheet
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[153px] h-[36px] bg-[rgba(240,240,240,1)] rounded flex justify-between p-3 items-center">
              <span
                className="text-[14px] text-[#000000]"
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
            <Image
              src="/images/IconAdd.png"
              alt="combined_shape_Icon"
              width={36}
              height={36}
              className="ml-1.5"
            />
          </div>
        </div>
      </div>
      {/* container design - desktop and tablet */}
      <div className="flex flex-row  h-full mt-8 justify-between items-center bg-[#FFFFFF] px-8 my-5 mobile:hidden">
        <div className="flex flex-col cursor-pointer   bg-[rgba(243,146,0,1)]   w-[210px] h-[104px] justify-center items-center rounded-md ">
          <p className="text-[#FFFFFF] desktop:text-[13px] tablet:text-[13px] mobile:text-[36px] font-Figtree font-semibold ">
            TARGET HOURS
          </p>
          <p className="text-[#FFFFFF] text-[38px] tablet:text-[38px] mobile:text-[16px] font-Figtree font-medium ">
            300
          </p>
        </div>

        <div className="w-7" />
        <div className="flex flex-col cursor-pointer bg-[rgba(38,156,205,1)]  w-[210px] h-[104px]  desktop:w-[300px] desktop:h-[200px]  justify-center items-center rounded-md ">
          <p className="text-[#FFFFFF] desktop:text-[13px] tablet:text-[13px] mobile:text-[36px] font-Figtree font-semibold ">
            LOGGED HOURS
          </p>
          <p className="text-[#FFFFFF] text-[38px] tablet:text-[38px] mobile:text-[16px] font-Figtree font-medium ">
            0
          </p>
        </div>
        <div className="w-7" />
        <div className="flex flex-col cursor-pointer bg-[rgba(35,129,169,1)] desktop:w-[300px] desktop:h-[200px] w-[210px] h-[104px] justify-center items-center rounded-md ">
          <p className="text-[#FFFFFF] desktop:text-[13px] tablet:text-[13px] mobile:text-[36px] font-Figtree font-semibold ">
            BILLABLE HOURS
          </p>
          <p className="text-[#FFFFFF] text-[38px] tablet:text-[38px] mobile:text-[16px] font-Figtree font-medium ">
            0
          </p>
        </div>
        <div className="w-7" />
        <div className="flex flex-col cursor-pointer bg-[rgba(11,88,120,1)] desktop:w-[300px] desktop:h-[200px]  w-[210px] h-[104px] justify-center items-center rounded-md ">
          <p className="text-[#FFFFFF] desktop:text-[13px] tablet:text-[13px] mobile:text-[36px] font-Figtree font-semibold ">
            UNDER/OVER
          </p>
          <p className="text-[#FFFFFF] text-[38px] tablet:text-[38px] mobile:text-[16px] font-Figtree font-medium ">
            0
          </p>
        </div>
      </div>
      <div className="px-8">
        <ProgressBar
          totalHours={320}
          completedHours={225}
          loggedPercent={8}
          billablePercent={6}
        />
      </div>
      <div
        className="text-[25px] text-[#000000] !font-helvetica px-8 mt-5"
        style={{ fontWeight: 400 }}
      >
        Team Members
      </div>
      <div className="px-8 mt-2">
        <ProgressBar
          totalHours={320}
          completedHours={190}
          loggedPercent={38}
          billablePercent={66}
          showUser={true}
          userName="Kyle Deeley"
        />
      </div>
      <div className="px-8 mt-4">
        <ProgressBar
          totalHours={320}
          completedHours={10}
          loggedPercent={38}
          billablePercent={45}
          showUser={true}
          userName="Steve Gaitskill"
        />
      </div>
      <div className="px-8 mt-4">
        <ProgressBar
          totalHours={320}
          completedHours={50}
          loggedPercent={38}
          billablePercent={56}
          showUser={true}
          userName="Gerald Yapp"
        />
      </div>
      <div className="px-8 mt-4">
        <ProgressBar
          totalHours={320}
          completedHours={120}
          loggedPercent={230}
          billablePercent={35}
          showUser={true}
          userName="Kaitlin"
        />
      </div>
      <div className="w-10 h-10" />
      {/*  container design - mobile */}
      {/* <div className="flex flex-col w-[92%]  mt-[160px] h-full justify-center items-center bg-[#FFFFFF] my-5 desktop:hidden tablet:hidden">
        <div className="flex flex-row w-full justify-center items-center ">
          <div className="flex flex-col cursor-pointer bg-[rgba(243,146,0,1)]  desktop:w-[300px] desktop:h-[200px]  w-[240px] h-[104px] justify-center items-center rounded-md ">
            <p className="text-[#FFFFFF] desktop:text-[13px] tablet:text-[13px] mobile:text-[36px] font-Figtree font-semibold ">
              TARGET HOURS
            </p>
            <p className="text-[#FFFFFF] text-[38px] tablet:text-[38px] mobile:text-[16px] font-Figtree font-medium ">
              300
            </p>
          </div>
          <div className="w-7" />
          <div className="flex flex-col cursor-pointer bg-[rgba(38,156,205,1)]  desktop:w-[300px] desktop:h-[200px]  w-[240px] h-[104px] justify-center items-center rounded-md ">
            <p className="text-[#FFFFFF] desktop:text-[13px] tablet:text-[13px] mobile:text-[36px] font-Figtree font-semibold ">
              LOGGED HOURS
            </p>
            <p className="text-[#FFFFFF] text-[38px] tablet:text-[38px] mobile:text-[16px] font-Figtree font-medium ">
              0
            </p>
          </div>
        </div>
        <div className="w-7" />
        <div className="flex flex-row w-full mt-5 justify-center items-center ">
          <div className="flex flex-col cursor-pointer bg-[rgba(35,129,169,1)] desktop:w-[300px] desktop:h-[200px]  w-[240px] h-[104px] justify-center items-center rounded-md ">
            <p className="text-[#FFFFFF] desktop:text-[13px] tablet:text-[13px] mobile:text-[36px] font-Figtree font-semibold ">
              BILLABLE HOURS
            </p>
            <p className="text-[#FFFFFF] text-[38px] tablet:text-[38px] mobile:text-[16px] font-Figtree font-medium ">
              0
            </p>
          </div>
          <div className="w-7" />
          <div className="flex flex-col cursor-pointer bg-[rgba(11,88,120,1)] desktop:text-[40px] tablet:text-[38px] mobile:text-[36px]  w-[240px] h-[104px] justify-center items-center rounded-md ">
            <p className="text-[#FFFFFF] desktop:text-[13px] tablet:text-[13px] mobile:text-[36px] font-Figtree font-semibold ">
              UNDER/OVER
            </p>
            <p className="text-[#FFFFFF] text-[38px] tablet:text-[38px] mobile:text-[16px] font-Figtree font-medium ">
              0
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

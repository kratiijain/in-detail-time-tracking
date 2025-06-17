import Image from "next/image";
import React from "react";

export default function ClientCard({ clientName, project, tasks }) {
  return (
    <div className="bg-[#F7F7F7]  rounded-md mb-6  overflow-x-auto">
      {/* Header */}
      <div className="p-4 border-b border-[#DADADA]">
        <h2 className="sm:text-[24px] text-[20px] text-[#000000] font-[400] font-helvetica ">
          {clientName}
        </h2>
        <div className="flex w-full justify-between bg-[#2489B3] px-4 py-1 rounded  mt-2 ">
          <div className="flex  gap-1 items-center  text-[#FFFFFF] text-[14px] font-Figtree ">
            <span className="font-bold">WEBSITE REVAMP</span>
            <span className="">|</span>
            <div className="flex gap-1 font-normal">
              <span>CE452637</span>
              <span>|</span>
              <span>IN452637</span>
              <span>|</span>
              <span>PO452637</span>
            </div>
          </div>
          <Image
            src="/images/icon-menu-white.webp"
            alt="menu_Icon"
            width={24}
            height={24}
            className="ml-1"
          />
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-8 text-[#0A0A0A] bg-[#EDEDED] text-[12px] font-medium px-4 py-2">
        <div className="col-span-3">Task</div>
        <div className="text-center">Status</div>
        <div className="text-center">Logged</div>
        <div className="text-center">Billable</div>
        <div className="text-center">Variance</div>
        <div className="text-center">Who</div>
      </div>

      {/* Tasks */}
    </div>
  );
}

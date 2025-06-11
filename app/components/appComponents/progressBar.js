"use client";
import { useRouter } from "next/navigation";
import React from "react";

const ProgressBar = ({
  totalHours = 320,
  completedHours = 0,
  loggedPercent = 0,
  billablePercent = 0,
  showUser = false,
  userName = "",
  userAvatar = "",
  redirectTo = "",
}) => {
  // const percentComplete = ((completedHours / totalHours) * 100).toFixed(1);
  const router = useRouter();

  const handleClick = () => {
    if (redirectTo) {
      router.push(redirectTo);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="w-full  p-3  rounded-md  border border-[#DEDEDE]"
      style={{
        background:
          "linear-gradient(180deg, rgba(243, 243, 243, 1) 0%, rgba(226, 226, 226, 1) 100%)",
      }}
    >
      <div className="flex justify-between text-[13px] text-[#000000] font-Figtree font-medium mb-2">
        {showUser ? (
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 sm:w-4 sm:h-4  bg-[#A3A3A3] rounded-full" />
            <span>{userName}</span>
          </div>
        ) : (
          <span>Progress</span>
        )}
        <span className="ml-2 sm:ml-5 ">
          {completedHours} of {totalHours} billable hours completed
        </span>
      </div>
      <div className="w-full bg-white h-3 rounded-md  overflow-hidden">
        <div
          className="h-full bg-[#2489B3] rounded-md transition-all  duration-300"
          style={{ width: `${loggedPercent}%` }}
        />
      </div>
      <div className="flex justify-between mt-2  text-[13px] text-[#217093] font-Figtree font-medium">
        <span>{loggedPercent}% Complete</span>
        <span className="ml-auto">{billablePercent}% Logged vs Billable</span>
      </div>
    </div>
  );
};

export default ProgressBar;

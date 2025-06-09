import React from "react";

const ProgressBar = ({
  totalHours = 320,
  completedHours = 0,
  loggedPercent = 0,
  billablePercent = 0,
  showUser = false,
  userName = "",
  userAvatar = "",
}) => {
  const percentComplete = ((completedHours / totalHours) * 100).toFixed(1);

  return (
    <div
      className="w-full  p-5  rounded-md  border border-[#DEDEDE]"
      style={{
        background:
          "linear-gradient(180deg, rgba(243, 243, 243, 1) 0%, rgba(226, 226, 226, 1) 100%)",
      }}
    >
      <div className="flex justify-between text-[13px] text-[#000000] font-Figtree font-medium mb-2">
        {showUser ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#A3A3A3] rounded-full" />
            <span>{userName}</span>
          </div>
        ) : (
          <span>Progress</span>
        )}
        <span>
          {completedHours} of {totalHours} billable hours completed
        </span>
      </div>
      <div className="w-full bg-white h-3 rounded-md  overflow-hidden">
        <div
          className="h-full bg-[#2489B3] rounded-md transition-all  duration-300"
          style={{ width: `${percentComplete}%` }}
        />
      </div>
      <div className="flex justify-between mt-2  text-[13px] text-[#217093] font-Figtree font-medium">
        <span>{loggedPercent}% Complete</span>
        <span>{billablePercent}% Logged vs Billable</span>
      </div>
    </div>
  );
};

export default ProgressBar;

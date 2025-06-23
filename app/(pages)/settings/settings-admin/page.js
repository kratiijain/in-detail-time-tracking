"use client";

import { images } from "@/app/constants/images";
import Image from "next/image";
import React, { useState } from "react";

export default function settingsAdmin() {
  const defaultColors = {
    pending: "#E0F2F9",
    inProgress: "#EAEAEA",
    completed: "#E6EFB5",
    invoiced: "#CFDEE5",
    projectBar: "#2489B3",
    progressBar: "#2489B3",
  };
  const [colors, setColors] = useState(defaultColors);
  const handleColorChange = (key, value) => {
    setColors((prev) => ({ ...prev, [key]: value }));
  };
  const [activeTab, setActiveTab] = useState("HOURLY RATE");
  const hourlyRate = [
    {
      id: 1,
      rate: 400,
    },
    {
      id: 2,
      rate: 450,
    },
    {
      id: 3,
      rate: 300,
    },
    {
      id: 4,
      rate: 500,
    },
    {
      id: 5,
      rate: 700,
    },
    {
      id: 6,
      rate: 800,
    },
    {
      id: 7,
      rate: 900,
    },
  ];
  const colours = [
    { id: 1, key: "pending", status: "Pending" },
    { id: 2, key: "inProgress", status: "In Progress" },
    { id: 3, key: "completed", status: "Completed" },
    { id: 4, key: "invoiced", status: "Invoiced" },
    { id: 5, key: "projectBar", status: "Project Bar" },
    { id: 6, key: "progressBar", status: "Progress Bar" },
  ];

  const approvalTypes = [
    {
      id: 1,
      type: "Email",
    },
    {
      id: 2,
      type: "Internal",
    },
    {
      id: 3,
      type: "Verbal",
    },
    {
      id: 4,
      type: "Wsapp",
    },
  ];
  const tabOptions = ["HOURLY RATE", "COLOURS", "APPROVAL TYPES"];
  return (
    <div className="mx-auto w-full">
      <div className="w-full h-[10px] top-[4.4rem] fixed z-40  bg-[var(--color-gray-soft)]" />
      <div className="flex w-full px-3 sm:px-8 ">
        <div className="bg-[var(--color-white)] flex flex-col mt-5  sm:mt-8  w-full    ">
          <div
            className="sm:text-[28px] text-[20px] text-[var(--color-black)] !font-helvetica"
            style={{ fontWeight: 400 }}
          >
            Settings{" "}
          </div>

          <div className="flex gap-1 mt-5 mb-2 text-[12px] font-Figtree font-medium">
            {tabOptions.map((tab, index) => (
              <React.Fragment key={tab}>
                <span
                  onClick={() => setActiveTab(tab)}
                  className={`cursor-pointer rounded ${
                    activeTab === tab
                      ? "bg-[var(--color-blue-muted)] text-white"
                      : "text-[var(--color-black)]"
                  } transition duration-200`}
                >
                  {tab}
                </span>
                {index !== tabOptions.length - 1 && (
                  <span className="text-[var(--color-black)]">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
          {activeTab === "HOURLY RATE" && (
            <>
              {hourlyRate.map((hourlyRate, idx) => (
                <div
                  key={hourlyRate.id}
                  className="bg-[var(--color-neutral-gray)] w-full rounded-md p-3 my-1.5 flex justify-between"
                >
                  <div className="text-[var(--color-black)] text-[14px] font-Figtree font-semibold">
                    {hourlyRate.rate}
                  </div>
                  <Image
                    src={images.iconMenuBlack}
                    alt="menu icon black"
                    width={24}
                    height={24}
                    className="ml-5 "
                  />
                </div>
              ))}
              <div className="bg-[var(--color-neutral-gray)] w-full max-w-xl rounded-md p-5 my-1.5 flex justify-between items-center">
                <div className="text-[var(--color-black)] text-[12.5px] font-Figtree font-normal">
                  Input Rate (number only)
                </div>
                <button className="bg-[var(--color-blue-muted)]  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded text-[14px] font-Figtree text-[var(--color-white)] font-semibold">
                  SAVE RATE
                </button>
              </div>
            </>
          )}
          {activeTab === "COLOURS" && (
            <div className="bg-[var(--color-neutral-gray)] rounded-md mt-3 grid grid-cols-12">
              <div className="col-span-12  md:col-span-5   ">
                {colours.map((colours, idx) => (
                  <div
                    key={colours.id}
                    className=" w-full  p-3 my-1.5  justify-between items-center flex"
                  >
                    <div className="text-[var(--color-black)] text-[16px] font-Figtree font-normal">
                      {colours.status}
                    </div>
                    <div className="flex items-center justify-center ml-3">
                      <input
                        type="color"
                        value={colors[colours.key]}
                        onChange={(e) =>
                          handleColorChange(colours.key, e.target.value)
                        }
                        className="h-10 w-10  cursor-pointer rounded-md   p-0 appearance-none"
                      />
                      <input
                        type="text"
                        value={colors[colours.key]}
                        readOnly
                        className="w-[148px] text-[var(--color-black)] ml-3 bg-[var(--color-white)] text-[12.5px] font-Figtree font-normal  px-2 py-3 rounded "
                      />
                    </div>
                  </div>
                ))}
                <div className=" w-full max-w-sm  p-3 my-1.5 flex justify-between items-center">
                  <button className="bg-[var(--color-gray-soft)] transform transition-transform duration-300 hover:scale-105  px-8 py-2 rounded text-[14px] font-Figtree text-[var(--color-black)] font-semibold">
                    Cancel
                  </button>
                  <button className="bg-[var(--color-blue-muted)]  transform transition-transform duration-300 hover:scale-105 px-6 py-2 rounded text-[14px] font-Figtree text-[var(--color-white)] font-semibold">
                    Save Colours
                  </button>
                </div>
              </div>
              <div />
            </div>
          )}
          {activeTab === "APPROVAL TYPES" && (
            <>
              {approvalTypes.map((approvalTypes, idx) => (
                <div
                  key={approvalTypes.id}
                  className="bg-[var(--color-neutral-gray)] w-full rounded-md p-3 my-1.5 flex justify-between"
                >
                  <div className="text-[var(--color-black)] text-[14px] font-Figtree font-semibold">
                    {approvalTypes.type}
                  </div>
                  <Image
                    src={images.iconMenuBlack}
                    alt="menu icon black"
                    width={24}
                    height={24}
                    className="ml-5 "
                  />
                </div>
              ))}
              <div className="bg-[var(--color-neutral-gray)] w-full max-w-xl rounded-md p-5 my-1.5 flex justify-between items-center">
                <div className="text-[var(--color-black)] text-[12.5px] font-Figtree font-normal">
                  Input Type
                </div>
                <button className="bg-[var(--color-blue-muted)]  transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded text-[14px] font-Figtree text-[var(--color-white)] font-semibold">
                  SAVE TYPE
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import ProgressBar from "@/app/components/appComponents/progressBar";
import { images } from "@/app/constants/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function addProjectsingle() {
  const router = useRouter();
  const hourData = [
    { label: "TARGET HOURS", value: 300, bg: "bg-[rgba(243,146,0,1)]" },
    { label: "LOGGED HOURS", value: 0, bg: "bg-[rgba(38,156,205,1)]" },
    { label: "BILLABLE HOURS", value: 0, bg: "bg-[rgba(35,129,169,1)]" },
    { label: "UNDER/OVER", value: 0, bg: "bg-[rgba(11,88,120,1)]" },
  ];
  const tabs = ["TIMESHEET", "BRIEF", "NOTES"];
  const [activeTab, setActiveTab] = useState("TIMESHEET");
  const [projectType, setProjectType] = useState("single");
  const [toggles, setToggles] = useState({
    addTasks: false,
    clientView: false,
    active: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="mx-auto w-full">
      <div className="w-full h-[10px] top-[4.4rem] fixed z-40  bg-[var(--color-gray-soft)]" />

      <div className="flex w-full px-3 sm:px-8 ">
        <div className="bg-[var(--color-white)] mt-5  sm:mt-8  w-full  flex justify-between items-center">
          <div
            className="sm:text-[28px] text-[20px] text-[var(--color-black)] font-helvetica"
            style={{ fontWeight: 400 }}
          >
            Car Wash Club
          </div>
          <div className="flex justify-between items-center">
            <div
              // onClick={() => setIsOpen(true)}
              onClick={() => router.push("/dashboard/add-projects-single")}
              className="w-[26px] h-[26px] sm:w-[36px] sm:h-[36px]  relative"
            >
              <Image
                src={images.iconAdd}
                alt="icon add"
                fill
                className="object-contain ml-1.5"
              />
            </div>
          </div>
        </div>
      </div>
      {/* container design - desktop and tablet */}
      <div className=" hidden sm:flex md:flex lg:flex flex-row  h-full mt-8 justify-between items-center bg-[var(--color-white)] px-3 sm:px-8 my-5  ">
        <div className="flex flex-col cursor-pointer  p-3  bg-[rgba(243,146,0,1)]   w-[210px] h-[104px] justify-center items-center rounded-md ">
          <p className="text-[var(--color-white)] text-[10px] sm:text-[13px]  font-Figtree font-semibold ">
            TARGET HOURS
          </p>
          <p className="text-[var(--color-white)] text-[25px] sm:text-[38px] font-Figtree font-medium ">
            300
          </p>
        </div>

        <div className="w-7" />
        <div className="flex flex-col cursor-pointer  p-3  bg-[rgba(38,156,205,1)]   w-[210px] h-[104px] justify-center items-center rounded-md ">
          <p className="text-[var(--color-white)] text-[10px] sm:text-[13px]  font-Figtree font-semibold ">
            LOGGED HOURS
          </p>
          <p className="text-[var(--color-white)] text-[25px] sm:text-[38px] font-Figtree font-medium ">
            0
          </p>
        </div>
        <div className="w-7" />
        <div className="flex flex-col cursor-pointer  p-3  bg-[rgba(35,129,169,1)]   w-[210px] h-[104px] justify-center items-center rounded-md ">
          <p className="text-[var(--color-white)] text-[10px] sm:text-[13px]  font-Figtree font-semibold ">
            BILLABLE HOURS
          </p>
          <p className="text-[var(--color-white)] text-[25px] sm:text-[38px] font-Figtree font-medium ">
            0
          </p>
        </div>
        <div className="w-7" />
        <div className="flex flex-col cursor-pointer  p-3  bg-[rgba(11,88,120,1)]    w-[210px] h-[104px] justify-center items-center rounded-md ">
          <p className="text-[var(--color-white)] text-[10px] sm:text-[13px]  font-Figtree font-semibold ">
            UNDER/OVER
          </p>
          <p className="text-[var(--color-white)] text-[25px] sm:text-[38px] font-Figtree font-medium ">
            0
          </p>
        </div>
      </div>

      {/*  container design - mobile */}
      <div className=" flex-col    h-full justify-center items-center bg-[var(--color-white)] my-5 px-3 block sm:hidden ">
        <div className="flex flex-row w-full justify-center items-center ">
          <div className="flex flex-col cursor-pointer bg-[rgba(243,146,0,1)]    w-[240px] h-[104px] justify-center items-center rounded-md ">
            <p className="text-[var(--color-white)] font-Figtree font-semibold ">
              TARGET HOURS
            </p>
            <p className="text-[var(--color-white)] text-[38px]  font-Figtree font-medium ">
              300
            </p>
          </div>
          <div className="w-7" />
          <div className="flex flex-col cursor-pointer bg-[rgba(38,156,205,1)]    w-[240px] h-[104px] justify-center items-center rounded-md ">
            <p className="text-[var(--color-white)]  font-Figtree font-semibold ">
              LOGGED HOURS
            </p>
            <p className="text-[var(--color-white)] text-[38px]  font-Figtree font-medium ">
              0
            </p>
          </div>
        </div>
        <div className="w-7" />
        <div className="flex flex-row w-full mt-5 justify-center items-center ">
          <div className="flex flex-col cursor-pointer bg-[rgba(35,129,169,1)]   w-[240px] h-[104px] justify-center items-center rounded-md ">
            <p className="text-[var(--color-white)] font-Figtree font-semibold ">
              BILLABLE HOURS
            </p>
            <p className="text-[var(--color-white)] text-[38px]  font-Figtree font-medium ">
              0
            </p>
          </div>
          <div className="w-7" />
          <div className="flex flex-col cursor-pointer bg-[rgba(11,88,120,1)]    w-[240px] h-[104px] justify-center items-center rounded-md ">
            <p className="text-[var(--color-white)]  font-Figtree font-semibold ">
              OVER
            </p>
            <p className="text-[var(--color-white)] text-[38px]  font-Figtree font-medium ">
              10:00
            </p>
          </div>
        </div>
      </div>
      <div className="px-3 sm:px-8">
        <ProgressBar
          totalHours={320}
          completedHours={225}
          loggedPercent={8}
          billablePercent={6}
        />
      </div>

      <div className="flex items-center justify-between gap-6 mt-6 mb-6  px-3 sm:px-8 sm:mt-0">
        <div className="flex ">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => {
                if (tab === "NOTES") {
                  router.push("/dashboard/notes");
                } else {
                  setActiveTab(tab);
                }
              }}
              className={`px-2 py-2 text-[12px]  font-medium font-Figtree border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-dashboard-blue-primary text-[var(--color-black)]"
                  : "border-transparent text-[var(--color-black)] hover:text-dashboard-blue-primary"
              }`}
              style={{ fontSize: "12px" }}
            >
              {tab}
              {index < tabs.length - 1 && (
                <span className="ml-4 text-[var(--color-black)]">|</span>
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 text-[12px]  font-Figtree font-medium">
          <div className="flex items-center gap-2">
            <span className="text-[var(--color-black)]">All Tasks</span>
          </div>
          <div className="flex items-center gap-1 text-[12px]  font-Figtree font-medium">
            <div className="w-3 h-3 bg-[#E0F2F9] border border-[var(--color-custom-border)] rounded-full"></div>
            <span className="text-[var(--color-black)]">Pending</span>
          </div>
          <div className="flex items-center gap-1 text-[12px]  font-Figtree font-medium">
            <div className="w-3 h-3 bg-[#EAEAEA] border border-[var(--color-custom-border)] rounded-full"></div>
            <span className="text-[var(--color-black)]">In Progress</span>
          </div>
          <div className="flex items-center gap-1 text-[12px]  font-Figtree font-medium">
            <div className="w-3 h-3 bg-[#E6EFB5] border border-[var(--color-custom-border)] rounded-full"></div>
            <span className="text-[var(--color-black)]">Completed</span>
          </div>
          <div className="flex items-center gap-1 text-[12px]  font-Figtree font-medium">
            <div className="w-3 h-3 bg-[#CFDEE5] border border-[var(--color-custom-border)] rounded-full"></div>
            <span className="text-[var(--color-black)]">Invoiced</span>
          </div>
        </div>

        <button className="flex items-center justify-center gap-2  font-normal text-[12px] font-Figtree text-[#000000]  ">
          <Image
            src={images.iconClientLink}
            alt="icon client link"
            className="w-[18px] h-[8px] ml-1.5"
          />
          <span>Client Link</span>
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold mb-6 text-black">
          PROJECT DETAILS
        </h3>

        <div className="space-y-4">
          {/* Client Dropdown */}
          <div>
            <label className="block text-xs font-medium text-black mb-1">
              Client
            </label>
            <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black">
              <option>Select Client</option>
              <option value="client1">Client 1</option>
              <option value="client2">Client 2</option>
            </select>
          </div>

          {/* Project Title */}
          <div>
            <label className="block text-xs font-medium text-black mb-1">
              Project Title
            </label>
            <input
              type="text"
              placeholder="Enter project title"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
            />
          </div>

          {/* Project Type Toggle */}
          <div>
            <label className="block text-xs font-medium text-black mb-2">
              Project Type
            </label>
            <div className="flex bg-gray-100 rounded-lg p-1 text-black">
              <button
                type="button"
                onClick={() => setProjectType("single")}
                className={`flex-1 py-2 px-4 rounded-md text-xs font-medium transition-colors ${
                  projectType === "single"
                    ? "bg-white text-dashboard-blue-primary shadow-sm"
                    : "text-black"
                }`}
              >
                Single Project
              </button>
              <button
                type="button"
                onClick={() => setProjectType("repeating")}
                className={`flex-1 py-2 px-4 rounded-md text-xs font-medium transition-colors ${
                  projectType === "repeating"
                    ? "bg-white text-black text-dashboard-blue-primary shadow-sm"
                    : "text-black"
                }`}
              >
                Repeating Project
              </button>
            </div>
          </div>

          {/* Start/End Month */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-black mb-1">
                Start Month
              </label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black">
                <option>May 2025</option>
                <option>June 2025</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-black mb-1">
                End Month
              </label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black">
                <option>Aug 2025</option>
                <option>Sep 2025</option>
              </select>
            </div>
          </div>

          {/* Year Buttons */}
          <div className="flex gap-2">
            {["2024", "2025", "2026", "2027", "2028", "2029"].map((year) => (
              <button
                key={year}
                type="button"
                className="px-3 py-1 text-xs border border-gray-300 text-black rounded hover:bg-gray-50"
              >
                {year}
              </button>
            ))}
          </div>

          {/* Brief */}
          <div>
            <label className="block text-xs font-medium text-black mb-1">
              Brief (Optional)
            </label>
            <textarea
              placeholder="Add a Project Brief"
              className="w-full h-20 border border-gray-300 rounded px-3 py-2 text-sm text-black"
            />
          </div>

          {/* Hourly Rate & PO Number */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-black mb-1">
                Default Hourly Rate
              </label>
              <input
                type="text"
                placeholder="200"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-black mb-1">
                Purchase Order Number (Optional)
              </label>
              <input
                type="text"
                placeholder="Input PO Number (Optional)"
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
              />
            </div>
          </div>

          {/* Estimate & Invoice */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-black mb-1">
                Estimate
              </label>
              <input
                type="text"
                placeholder="00:00"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-black mb-1">
                Invoice
              </label>
              <input
                type="text"
                placeholder="00:00"
                className="w-full border border-gray-300 text-black rounded px-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Team Members */}
          <div>
            <label className="block text-xs font-medium text-black mb-2">
              Team Members
            </label>
            <div className="space-y-2">
              {[0, 1].map((row) => (
                <div key={row} className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Person Name"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                  />
                  <input
                    type="text"
                    placeholder="Person Name"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-black"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="space-y-3">
            {[
              {
                key: "addTasks",
                label:
                  "ADD TASKS - Team Members can add/view tasks in this Project",
              },
              {
                key: "clientView",
                label: "CLIENT VIEW - Display Team Member Log on Client View",
              },
              {
                key: "active",
                label: "ACTIVE - Make Project Active / Inactive",
              },
            ].map(({ key, label }) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-xs text-gray-700">{label}</span>
                <button
                  type="button"
                  onClick={() => handleToggle(key)}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    toggles[key] ? "bg-green-500" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                      toggles[key] ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="px-6 py-2 text-sm text-black border border-gray-300 rounded hover:bg-gray-50"
            >
              CANCEL
            </button>
            <button
              type="button"
              className="px-6 py-2 text-sm text-black text-dashboard-soft-red border border-dashboard-soft-red rounded hover:bg-dashboard-soft-red hover:text-white transition-colors"
            >
              DELETE
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm   bg-dashboard-blue-primary text-black rounded hover:bg-blue-600 transition-colors"
            >
              SAVE PROJECT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

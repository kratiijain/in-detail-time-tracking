"use client";
import ClientCard from "@/app/components/appComponents/clientCard";
import ProgressBar from "@/app/components/appComponents/progressBar";
import { images } from "@/app/constants/images";
import Image from "next/image";
import React, { useState } from "react";

export default function dashboardTeamMemberDetail() {
  const [modalAddTask, setModalAddTask] = useState(false);

  const clients = [
    {
      clientName: "Apple Computers",
      project: ["WEBSITE REVAMP", "CE456237", "IN456237", "PO456237"],
      tasks: [
        {
          description:
            "Install Wordpress theme and plugins and setup server and prepare for content and text.",
          status: "Open",
          logged: "4:00",
          billable: "4:00",
          variance: "0:00",
          who: "CE00232",
        },
        {
          description: "Install Wordpress theme and plugins and setup server.",
          status: "Open",
          logged: "2:00",
          billable: "1:00",
          variance: "1:00",
          who: "Waqas",
        },
        {
          description: "Just updated something.",
          status: "Closed",
          logged: "3:00",
          billable: "3:00",
          variance: "0:00",
          who: "John Smith",
        },
      ],
    },
    {
      clientName: "Dunstores",
      project: ["LOGO DESIGN", "Verbal"],
      tasks: [
        {
          description:
            "Install Wordpress theme and plugins and setup server and prepare for content and text.",
          status: "Open",
          logged: "1:15",
          billable: "0:00",
          variance: "1:15",
          who: "Verbal",
        },
        {
          description:
            "Just updated something. Install Wordpress theme and plugins and setup server.",
          status: "Open",
          logged: "2:00",
          billable: "2:00",
          variance: "0:00",
          who: "Koos van Wyk",
        },
        {
          description: "Just updated something.",
          status: "Closed",
          logged: "1:00",
          billable: "1:00",
          variance: "0:00",
          who: "Koos van Wyk",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="w-full h-[10px] top-[4.4rem] fixed z-40  bg-[var(--color-gray-soft)]" />
      <div className="flex w-full px-3 sm:px-8 ">
        <div className="bg-[var(--color-white)] mt-5  sm:mt-8  w-full  flex justify-between items-center">
          <div
            className="sm:text-[28px] text-[20px] text-[var(--color-black)] font-helvetica"
            style={{ fontWeight: 400 }}
          >
            Kyle Deeley
          </div>
          <div className="flex justify-between items-center">
            <div className="w-[153px] h-[36px] bg-[var(--color-ghost-white)] rounded flex justify-between p-3 items-center">
              <span
                className="sm:text-[14px] text-[12px] text-[var(--color-black)] font-helvetica "
                style={{ fontWeight: 400 }}
              >
                December 2025
              </span>
              <Image
                src={images.iconDropdownCalendar}
                alt="combined_shape_Icon"
                width={11}
                height={9}
                className="ml-1.5 "
              />
            </div>
            <div
              // onClick={() => setIsOpen(true)}
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
              UNDER/OVER
            </p>
            <p className="text-[var(--color-white)] text-[38px]  font-Figtree font-medium ">
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

      {/* <div className="bg-[#F7F7F7] rounded-md overflow-hidden mt-3 px-3 sm:px-8 pb-4">
   
        <div className="sm:text-[28px] text-[20px] text-[#[var(--color-black)]] font-[400] font-helvetica mt-3">
          granddy Computers
        </div>
      </div> */}
      <div className="p-6">
        {clients.map((client, index) => (
          <ClientCard
            key={index}
            clientName={client.clientName}
            project={client.project}
            tasks={client.tasks}
          />
        ))}
      </div>
      {modalAddTask && (
        <div
          className="fixed inset-0 z-50 flex justify-end items-start top-26 bg-opacity-30"
          onClick={() => setModalAddTask(false)}
        >
          <div className="bg-[var(--color-cream-yellow)] rounded-lg shadow-lg w-[132px] h-[102px] p-3 mt-10 mr-6 relative">
            <div className="flex items-center my-2 ">
              <Image
                src="/images/Icon_Add_Task.png"
                alt="combined_shape_Icon"
                width={13}
                height={13}
                className="object-contain "
              />
              <p className="text-[13px] font-Figtree text-[var(--color-black)] font-semibold leading-[14px] ml-2">
                Add Task
              </p>
            </div>
            <div className="flex items-center my-2">
              <Image
                src="/images/Icon_Add_Project.png"
                alt="combined_shape_Icon"
                width={13}
                height={13}
                className="object-contain "
              />
              <p className="text-[13px] font-Figtree text-[var(--color-black)] font-semibold leading-[14px] ml-2">
                Add Project
              </p>
            </div>
            <div className="flex items-center my-2">
              <Image
                src="/images/Icon_Add_Client.png"
                alt="combined_shape_Icon"
                width={13}
                height={13}
                className="object-contain "
              />
              <p className="text-[13px] font-Figtree text-[var(--color-black)] font-semibold leading-[14px] ml-2">
                Add Client
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

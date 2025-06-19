import { images } from "@/app/constants/images";
import Image from "next/image";
import React from "react";

export default function ClientCard({ clientName, project, tasks }) {
  const data = [
    {
      clientName: "Kyle Deeley",
      ce: "CE452637",
      in: "IN452637",
      po: "PO452637",
      project: "WEBSITE REVAMP",
      tasks: [
        {
          task: "Install Wordpress theme and setup server and prepare content.",
          status: "in-progress",
          logged: "0",
          billable: "4:00",
          variance: "0",
          invoice: "CE000323",
        },
        {
          task: "Install plugins and setup hosting.",
          status: "pending",
          logged: "2:30",
          billable: "10:00",
          variance: "+7:30",
          invoice: "Wsapp",
        },
        {
          task: "Prepare content and review design.",
          status: "completed",
          logged: "2:00",
          billable: "7:00",
          variance: "+5:00",
          invoice: "Kyle Deeley",
        },
      ],
    },
    {
      clientName: "John Smith",
      ce: "CE882233",
      in: "IN882233",
      po: "PO882233",
      project: "MOBILE APP DESIGN",
      tasks: [
        {
          task: "Create wireframes and mockups.",
          status: "closed",
          logged: "3:00",
          billable: "5:00",
          variance: "+2:00",
          invoice: "JSApp",
        },
        {
          task: "Design system and component library.",
          status: "in-progress",
          logged: "1:30",
          billable: "3:00",
          variance: "+1:30",
          invoice: "JSUI",
        },
      ],
    },
  ];

  const getRowColor = (status) => {
    switch (status) {
      case "in-progress":
        return "bg-[#E0F2F9]";
      case "pending":
        return "bg-[#E2E2E2]";
      case "completed":
        return "bg-[#F6F2BB]";
      case "closed":
        return "bg-[#CFDEE5]";
      default:
        return "bg-white";
    }
  };
  const renderStatusContent = (status, content) => {
    switch (status.toLowerCase()) {
      case "pending":
        return (
          <Image
            src={images.iconPending}
            alt="Pending"
            width={16}
            height={16}
          />
        );
      case "in-progress":
        return (
          <Image
            src={images.iconInprogress}
            alt="In Progress"
            width={16}
            height={16}
          />
        );
      case "closed":
        return (
          <Image src={images.iconClosed} alt="Closed" width={16} height={16} />
        );
      case "completed":
        return <span className="text-[12px] font-medium">22 Nov 2025</span>;
      default:
        return <span className="text-[12px]">{status}</span>;
    }
  };
  return (
    <div>
      {data.map((client, i) => (
        <div key={i} className="bg-[#F7F7F7] rounded-md mb-6 overflow-x-auto">
          {/* Header */}
          <div className="p-2 ">
            <h2 className="sm:text-[24px] text-[20px] text-[#000000] font-[400] font-helvetica">
              {client.clientName}
            </h2>

            <div className="flex w-full justify-between bg-[#2489B3] px-2 py-1 rounded mt-2">
              <div className="flex gap-1 items-center text-[#FFFFFF] text-[14px] font-Figtree">
                <span className="font-bold">{client.project}</span>
                <span>|</span>
                <div className="flex gap-1 font-normal">
                  <span>{client.ce}</span>
                  <span>|</span>
                  <span>{client.in}</span>
                  <span>|</span>
                  <span>{client.po}</span>
                </div>
              </div>
              <Image
                src={images.iconMenuWhite}
                alt="menu_Icon"
                width={24}
                height={24}
                className="ml-1"
              />
            </div>
          </div>

          {/* Table */}
          <table className="w-full text-[9px] font-Figtree border-separate border-spacing-y-2 border-spacing-x-2">
            <thead className="sticky top-0 bg-[#FFFFFF] text-[#000000] font-medium">
              <tr>
                <th className="text-center ">TASK</th>
                <th className="text-center ">STATUS</th>
                <th className="text-center ">LOGGED</th>
                <th className="text-center ">BILLABLE</th>
                <th className="text-center ">VARIANCE</th>
                <th className="text-center ">INVOICE</th>
              </tr>
            </thead>
            <tbody>
              {client.tasks.map((task, index) => (
                <tr
                  key={index}
                  className={`${getRowColor(
                    task.status
                  )} text-[#000000]  font-Figtree  transition-all duration-200`}
                >
                  <td className="px-4 py-2  text-[12.5px]  font-normal rounded-[2px]">
                    {task.task}
                  </td>
                  <td className="text-center flex justify-center items-center px-4 py-2">
                    {renderStatusContent(task.status, task.date)}
                  </td>
                  <td className="text-center px-4 py-2 text-[12px] font-bold rounded-[2px] ">
                    {task.logged}
                  </td>
                  <td className="text-center px-4 py-2 text-[12px] font-bold rounded-[2px]">
                    {task.billable}
                  </td>
                  {task.status === "completed" ? (
                    <td
                      colSpan={2}
                      className="px-4 py-2 text-[12px] font-bold rounded-[2px] bg-[#F6F2BB]"
                    >
                      <div className="flex justify-between items-center w-full">
                        <span>{task.invoice}</span>
                        <Image
                          src={images.iconMenuBlack}
                          alt="menu icon black"
                          width={24}
                          height={24}
                          className="ml-4"
                        />
                      </div>
                    </td>
                  ) : (
                    <>
                      <td className="text-center px-4 py-2 text-[12px] font-bold rounded-[2px]">
                        {task.variance}
                      </td>
                      <td className="text-center px-4 py-2 text-[12px] font-medium rounded-[2px]">
                        {task.invoice}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

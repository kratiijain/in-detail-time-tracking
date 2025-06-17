"use client";
import { images } from "@/app/constants/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function clientsAdmin() {
  const router = useRouter();
  const [modalAddClient, setModalAddClient] = useState(false);
  const clients = [
    { id: 1, client: "Diamond Products", hourlyRate: "850" },
    { id: 2, client: "Operation Hunger ", hourlyRate: "450" },
    { id: 3, client: "Peter Pan", hourlyRate: "650" },
    { id: 4, client: "Wilson Stone", hourlyRate: "950" },
  ];
  return (
    <div className="mx-auto w-full">
      <div className="w-full h-[10px] top-[4.4rem] fixed z-40  bg-[#E7E7E7]" />
      <div className="flex w-full px-3 sm:px-8 ">
        <div className="bg-[#FFFFFF] mt-5  sm:mt-8  w-full  flex justify-between items-center">
          <div
            className="sm:text-[28px] text-[20px] text-[#000000] !font-helvetica"
            style={{ fontWeight: 400 }}
          >
            Clients{" "}
          </div>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => router.push("/clients/add-client")}
          >
            <div className="w-[118px] h-[36px] bg-[rgba(240,240,240,1)] rounded flex justify-between p-3 items-center">
              <span
                className="sm:text-[14px] text-[12px] text-[#000000]"
                style={{ fontWeight: 400 }}
              >
                Add Client
              </span>
              <Image
                src={images.iconAdd}
                alt="add client icon"
                width={18}
                height={18}
                className="ml-1"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-1 mt-5 font-Medium text-[14px] text-[#000000] font-Figtree px-3 sm:px-8">
        <span>ACTIVE</span>
        <span>|</span>
        <span>INACTIVE</span>
      </div>
      <div className="h-2" />
      {clients.map((c, idx) => (
        <div
          key={c.id}
          className="mt-2 flex  px-3 sm:px-8 items-center justify-between"
        >
          <div className="font-Figtree font-semiBold text-[14px] rounded-md p-2 bg-[#F7F7F7] text-[#000000] ">
            {c.client} - <span className="font-normal">{c.hourlyRate}</span>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={images.iconLink}
              alt="Link"
              width={18}
              height={8}
              className="ml-1.5 "
            />
            <Image
              onClick={() => setModalAddClient(true)}
              src={images.iconMenuBlack}
              alt="menu icon black"
              width={24}
              height={24}
              className="ml-5 "
            />
          </div>
        </div>
      ))}
      {modalAddClient && (
        <div
          className="fixed inset-0 z-50 flex justify-end items-start top-26 bg-opacity-30"
          onClick={() => setModalAddClient(false)}
        >
          <div className="bg-[#F3FACE] rounded-lg shadow-lg w-[132px] h-[102px] p-3 mt-10 mr-6 relative">
            <div className="flex items-center my-2 ">
              <Image
                src={images.iconAddTask}
                alt="iconAddTask"
                width={13}
                height={13}
                className="object-contain "
              />
              <p className="text-[13px] font-Figtree text-[#000000] font-semibold leading-[14px] ml-2">
                Edit
              </p>
            </div>
            <div className="flex items-center my-2">
              <Image
                src={images.iconAddProject}
                alt="iconAddProject"
                width={13}
                height={13}
                className="object-contain "
              />
              <p className="text-[13px] font-Figtree text-[#000000] font-semibold leading-[14px] ml-2">
                Add Client
              </p>
            </div>
            <div className="flex items-center my-2">
              <Image
                src={images.iconDelete}
                alt="iconAddProject"
                width={13}
                height={13}
                className="object-contain "
              />
              <p className="text-[13px] font-Figtree text-[#000000] font-semibold leading-[14px] ml-2">
                Delete
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

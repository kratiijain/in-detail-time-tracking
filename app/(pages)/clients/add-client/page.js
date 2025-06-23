"use client";
import { images } from "@/app/constants/images";
import Image from "next/image";
import React, { useState } from "react";

export default function addClient() {
  const [descText, setDescText] = useState("");
  return (
    <>
      <div className="w-full h-[10px] top-[4.4rem] fixed z-40  bg-[var(--color-gray-soft)]" />
      <div className="mx-auto w-full  px-3 sm:px-8 grid grid-cols-12 bg-[var(--color-neutral-gray)] ">
        <div className="col-span-12 md:col-span-8">
          <div className="flex w-full ">
            <div className="bg-[var(--color-white)] mt-5  sm:mt-8  w-full  flex justify-between items-center">
              <div
                className="sm:text-[28px] text-[20px] text-[var(--color-black)] !font-helvetica"
                style={{ fontWeight: 400 }}
              >
                Clients{" "}
              </div>
            </div>
          </div>
          <div className=" mt-5 font-Medium text-[12px] text-[var(--color-black)] font-Figtree ">
            ADD OR EDIT CLIENT BELOW
          </div>
          <div className="mt-10">
            <div>
              <label
                htmlFor="clientName"
                className="  font-Medium text-[13px] text-[var(--color-black)] font-Figtree "
              >
                Client Name
              </label>
              <input
                id="clientName"
                type="clientName"
                placeholder="Input Client Name"
                className="placeholder:text-[var(--color-black)] w-full border border-[var(--color-white)] rounded px-4 py-2 text-[13px] text-[var(--color-black)] bg-[var(--color-white)] font-normal font-Figtree  focus:outline-none  "
              />
            </div>

            <div className="mt-2">
              <label
                htmlFor="hourlyRate"
                className="  font-Medium text-[13px] text-[var(--color-black)] font-Figtree "
              >
                Default Hourly Rate
              </label>
              <div className="relative w-full">
                <select
                  id="hourlyRate"
                  className=" appearance-none mt-1 w-full  rounded px-3 focus:outline-none py-2  text-[13px] bg-[var(--color-gray-soft)] text-[var(--color-black)] font-Figtree font-normal"
                >
                  <option value="500">500</option>
                  <option value="1000">1000</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <Image
                    src={images.iconDropdownCalendar}
                    alt="dropdown icon"
                    className="w-3 h-3 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-2">
              <label
                htmlFor="notes"
                className="  font-Medium text-[13px] text-[var(--color-black)] font-Figtree "
              >
                Notes
              </label>
              <textarea
                className="placeholder:text-[var(--color-black)] text-[13px] text-[var(--color-black)] bg-[var(--color-white)] font-normal font-Figtree w-full mt-1 rounded p-2 min-h-[60px]  focus:outline-none"
                placeholder="Client Notes.."
                value={descText}
                onChange={(e) => setDescText(e.target.value)}
                rows="4"
              />
            </div>
          </div>

          {/* Client is Active */}
          <div className="bg-[var(--color-light-green)] p-2 rounded flex items-center gap-2 my-2">
            <input type="checkbox" id="clientActive" />
            <label
              htmlFor="clientActive"
              className="text-[13px] font-Figtree text-[var(--color-black)] font-medium"
            >
              Client is Active
            </label>
          </div>

          {/* Team Members */}
          <div>
            <p className="text-[13px] font-Figtree text-[var(--color-black)] font-medium mt-3 mb-2">
              Team Members{" "}
              <span className="font-normal">
                (who can see the client board)
              </span>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-[var(--color-gray-soft)] rounded px-3 py-2"
                  >
                    <input type="checkbox" id={`person${i}`} />
                    <label
                      htmlFor={`person${i}`}
                      className="text-[13px] font-Figtree text-[var(--color-black)] font-medium"
                    >
                      Person Name
                    </label>
                  </div>
                ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4 pt-4">
            <button className="bg-[var(--color-gray-soft)] transform transition-transform duration-300 hover:scale-105  px-8 py-2 rounded text-[14px] font-Figtree text-[var(--color-black)] font-semibold">
              Cancel
            </button>
            <button className="bg-[var(--color-blue-muted)]  transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded text-[14px] font-Figtree text-[var(--color-white)] font-semibold">
              Save Client
            </button>
          </div>
        </div>

        <div />
        <div className="h-5" />
      </div>
    </>
  );
}

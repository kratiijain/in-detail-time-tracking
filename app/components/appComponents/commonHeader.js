"use client";
import { images } from "@/app/constants/images";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CommonHeader({ setIsSidebarOpen }) {
  const router = useRouter();
  return (
    <div className="h-[70px] fixed top-0  right-0 z-60  w-full items-center flex p-3 sm:p-8 justify-between bg-[rgba(29,98,127,1)]">
      <div className="flex items-center justify-between">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-white block md:hidden
 mr-3"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* <button onClick={() => router.push("/logout")}>Logout</button> */}

        <div className="w-[120px] h-[30px] sm:w-[150px] sm:h-[35px] md:w-[175px] md:h-[41px] relative">
          <Image
            src={images.logoHeader}
            alt="Description of the image"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex items-center cursor-pointer group mx-4">
        <div className="w-5 h-5 sm:w-9 sm:h-9 bg-white rounded-full mr-1 sm:mr-3 flex items-center justify-center text-gray-800 font-semibold text-sm relative overflow-hidden">
          <Image
            src={images.logoHeader}
            alt="logo header"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <span className="mr-1 sm:mr-2 text-[16px] text-[rgba(255,255,255,1)] font-medium">
          Gerald Yap
        </span>
        <Image
          src={images.iconDropdown}
          alt="dropdown image"
          width={10}
          height={6}
        />
      </div>
    </div>
  );
}

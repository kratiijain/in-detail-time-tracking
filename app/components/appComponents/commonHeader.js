import Image from "next/image";

export default function CommonHeader() {
  return (
    <div className="h-[70px] fixed top-0  right-0 z-60  w-full items-center flex p-8 justify-between bg-[rgba(29,98,127,1)]">
      <Image
        src="/images/logoHeader.png"
        alt="Description of the image"
        width={175}
        height={41}
      />
      <div className="flex items-center cursor-pointer group mr-4">
        <div className="w-9 h-9 bg-white rounded-full mr-3 flex items-center justify-center text-gray-800 font-semibold text-sm">
          <Image
            src="/images/headerLogo.png"
            alt="Description of the image"
            width={38}
            height={38}
          />
        </div>
        <span className="mr-2 text-[16px] text-[rgba(255,255,255,1)] font-medium">
          Gerald Yap
        </span>
        <Image
          src="/images/iconDropDown.png"
          alt="Description of the image"
          width={10}
          height={6}
        />
      </div>
    </div>
  );
}

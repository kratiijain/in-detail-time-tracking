import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex  items-center justify-center bg-[#fff] px-4">
      <div className="w-full max-w-sm flex flex-col items-center">
        <Image
          className=""
          src="/images/InDetailLogo.png"
          alt="Next.js logo"
          width={171}
          height={222}
          priority
        />
        <h2
          className="font-bold  mb-4 mt-10 self-start "
          style={{
            color: "rgba(33, 112, 147, 1)",
            fontSize: "16px",
          }}
        >
          LOGIN
        </h2>
        <form className="w-full space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-[#fff] rounded px-4 py-2 text-[12.5px] text-[#000000]  focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-[#fff] rounded px-4 py-2 text-[12.5px] text-[#000000]  focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <div
            className="flex justify-between items-center text-sm font-medium"
            style={{ fontSize: "11px" }}
          >
            <a href="#" className="text-[#217093] text-[11px] font-medium">
              Forgot Password
            </a>
            <button
              type="submit"
              className="bg-[#217093]  text-[#ffffff] font-semibold px-5 py-2 rounded"
              style={{ fontSize: "14px" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

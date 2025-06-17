"use client";
import { images } from "@/app/constants/images";
import { loginValidationRules } from "@/utils/validation";
import Cookies from "js-cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    Cookies.set("authToken", "12345678", { path: "/" });
    router.push("/dashboard/dashboard-admin");
  };
  return (
    <main className="min-h-screen flex  items-start justify-center bg-[#fff] px-4">
      <div className="w-full h-[16px] top-0 fixed z-40  bg-[#E7E7E7]" />
      <div className="w-full max-w-sm flex flex-col items-center mt-15">
        <Image
          className=""
          src={images.logoIndetail}
          alt="logo Indetail"
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
        <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
          <input
            {...register("emailaddress", loginValidationRules.emailaddress)}
            id="email"
            type="email"
            placeholder="Email Address"
            className="w-full border border-[#fff] rounded px-4 py-2 text-[12.5px] text-[#000000] bg-[rgba(243,243,243,1)]  focus:outline-none  "
          />
          {errors.emailaddress && (
            <p className="text-[#fa626b] text-sm mt-1">
              {errors.emailaddress.message}
            </p>
          )}
          <input
            {...register("password", loginValidationRules.password)}
            id="password"
            type="password"
            placeholder="Password"
            className="w-full border border-[#fff] rounded px-4 py-2 mt-3 text-[12.5px] text-[#000000] bg-[rgba(243,243,243,1)] focus:outline-none  "
          />
          {errors.password && (
            <p className="text-[#fa626b] text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          <div
            className="flex justify-between items-center text-sm mt-3 font-medium"
            style={{ fontSize: "14px" }}
          >
            <a href="#" className="text-[#217093] text-[14px] font-medium">
              Welcome Back!{" "}
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

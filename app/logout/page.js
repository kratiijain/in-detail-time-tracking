"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    Cookies.remove("isLoggedIn");
    router.push("/authStack/login");
  }, []);

  return null;
}

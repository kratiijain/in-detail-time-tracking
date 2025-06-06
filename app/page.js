"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn) {
      router.push("/dashboard");
    } else {
      router.push("/authStack/login");
    }
  }, []);

  return null;
}

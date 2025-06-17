"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, matchPath, icon, label, setIsOpen }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(matchPath || href);
  const handleClick = () => {
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    if (isSmallScreen && setIsOpen) {
      setTimeout(() => {
        setIsOpen(false);
      }, 100);
    }
  };
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={`flex items-center px-7 py-3 transition-colors text-[#0A0A0A] ${
        isActive ? " bg-neutral-300" : " hover:text-[rgba(29,98,127,1)]"
      }`}
    >
      <span className={`mr-4`}>
        <img src={icon} alt={`${label} icon`} width={16} height={16} />
      </span>
      <span>{label}</span>
    </Link>
  );
}

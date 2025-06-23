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
      className={`flex items-center px-7 py-3 transition-colors text-[var(--color-true-black)] ${
        isActive
          ? " bg-[var(--color-neutral-300)]"
          : " hover:text-[var(--color-blue-dark)]"
      }`}
    >
      <span className={`mr-4`}>
        <img src={icon} alt={`${label} icon`} width={16} height={16} />
      </span>
      <span>{label}</span>
    </Link>
  );
}

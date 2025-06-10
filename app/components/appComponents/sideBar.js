import Image from "next/image";
import Link from "next/link";

export default function Sidebar({ setIsOpen, isOpen }) {
  return (
    <aside
      className={`fixed top-16 left-0 z-40 w-64 h-screen  text-[rgba(10,10,10,1)] font-Figtree text-base font-medium  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
      style={{
        background:
          "linear-gradient(180deg, rgba(231, 231, 231, 1) 0%, rgba(245, 245, 245, 1) 100%)",
      }}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="md:hidden absolute top-4 right-4"
      >
        ✕
      </button>

      <nav className="mt-12">
        <Link href="/dashboard" className="flex items-center px-7 py-3 ">
          <Image
            src="/images/Icon_combined_shape.png"
            alt="combined_shape_Icon"
            width={16}
            height={16}
            className="mr-4"
          />
          <span>Dashboard</span>
        </Link>
        <Link href="/clients" className="flex items-center px-7 py-3 ">
          <Image
            src="/images/Icon_combined_shape.png"
            alt="combined_shape_Icon"
            width={16}
            height={16}
            className="mr-4"
          />
          <span>Clients</span>
        </Link>
        <Link href="/single-projects" className="flex items-center px-7 py-3 ">
          <Image
            src="/images/Icon_combined_shape.png"
            alt="combined_shape_Icon"
            width={16}
            height={16}
            className="mr-4"
          />
          <span>Single Projects</span>
        </Link>
        <Link
          href="/repeating-projects"
          className="flex items-center px-7 py-3 "
        >
          <Image
            src="/images/Icon_combined_shape.png"
            alt="combined_shape_Icon"
            width={16}
            height={16}
            className="mr-4"
          />
          <span>Repeating Projects</span>
        </Link>
        <Link href="/team-members" className="flex items-center px-7 py-3 ">
          <Image
            src="/images/Icon_combined_shape.png"
            alt="combined_shape_Icon"
            width={16}
            height={16}
            className="mr-4"
          />
          <span>Team Members</span>
        </Link>
        <Link href="/settings" className="flex items-center px-7 py-3 ">
          <Image
            src="/images/Icon_combined_shape.png"
            alt="combined_shape_Icon"
            width={16}
            height={16}
            className="mr-4"
          />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
}

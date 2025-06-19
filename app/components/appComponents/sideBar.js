import { images } from "@/app/constants/images";
import NavLink from "./navLink";

export default function Sidebar({ setIsOpen, isOpen }) {
  return (
    <aside
      className={`fixed top-16 left-0 z-40 w-64 h-screen font-Figtree text-base font-medium ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0`}
      style={{
        background:
          "linear-gradient(180deg, rgba(231, 231, 231, 1) 0%, rgba(245, 245, 245, 1) 100%)",
      }}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="md:hidden text-[#000000] absolute top-4 right-4"
      >
        ✕
      </button>

      <nav className="mt-12">
        <NavLink
          href="/dashboard/dashboard-admin"
          matchPath="/dashboard"
          icon="/images/icon-combined-shape.webp"
          label="Dashboard"
          setIsOpen={setIsOpen}
        />
        <NavLink
          href="/clients/clients-admin"
          matchPath="/clients"
          icon="/images/icon-combined-shape.webp"
          label="Clients"
          setIsOpen={setIsOpen}
        />
        <NavLink
          href="/single-projects/single-projects-admin"
          matchPath="/single-projects"
          icon="/images/icon-combined-shape.webp"
          label="Single Projects"
          setIsOpen={setIsOpen}
        />
        <NavLink
          href="/repeating-projects/repeating-projects-admin"
          matchPath="/repeating-projects"
          icon="/images/icon-combined-shape.webp"
          label="Repeating Projects"
          setIsOpen={setIsOpen}
        />
        <NavLink
          href="/team-members/team-members-admin"
          matchPath="/team-members"
          icon="/images/icon-combined-shape.webp"
          label="Team Members"
          setIsOpen={setIsOpen}
        />
        <NavLink
          href="/settings/settings-admin"
          // href="/clients/clients-admin"
          matchPath="/settings"
          icon="/images/icon-combined-shape.webp"
          label="Settings"
          setIsOpen={setIsOpen}
        />
      </nav>
    </aside>
  );
}

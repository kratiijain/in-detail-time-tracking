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
        className="md:hidden absolute top-4 right-4"
      >
        ✕
      </button>

      <nav className="mt-12">
        <NavLink
          href="/dashboard/dashboard-admin"
          icon="/images/Icon_combined_shape.png"
          label="Dashboard"
        />
        <NavLink
          href="/clients"
          icon="/images/Icon_combined_shape.png"
          label="Clients"
        />
        <NavLink
          href="/single-projects"
          icon="/images/Icon_combined_shape.png"
          label="Single Projects"
        />
        <NavLink
          href="/repeating-projects"
          icon="/images/Icon_combined_shape.png"
          label="Repeating Projects"
        />
        <NavLink
          href="/team-members"
          icon="/images/Icon_combined_shape.png"
          label="Team Members"
        />
        <NavLink
          href="/settings"
          icon="/images/Icon_combined_shape.png"
          label="Settings"
        />
      </nav>
    </aside>
  );
}

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      className="fixed top-16 left-0 z-40 w-64 h-screen  text-white"
      style={{
        background:
          "linear-gradient(180deg, rgba(231, 231, 231, 1) 0%, rgba(245, 245, 245, 1) 100%)",
      }}
    >
      <nav className="mt-4">
        <Link
          href="/dashboard"
          className="flex items-center px-6 py-3 hover:bg-gray-700"
        >
          {/* You can add icons here */}
          <span>Dashboard</span>
        </Link>
        <Link
          href="/clients"
          className="flex items-center px-6 py-3 hover:bg-gray-700"
        >
          <span>Clients</span>
        </Link>
        <Link
          href="/single-projects"
          className="flex items-center px-6 py-3 hover:bg-gray-700"
        >
          <span>Single Projects</span>
        </Link>
        {/* Add other links as needed */}
      </nav>
    </aside>
  );
}

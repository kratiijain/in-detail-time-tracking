import CommonHeader from "../components/appComponents/commonHeader";
import Sidebar from "../components/appComponents/sideBar";

export default function AppPagesLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Header Component */}
      <CommonHeader />

      {/* Main Content */}
      <main className="ml-64 mt-16 p-8">{children}</main>
    </div>
  );
}

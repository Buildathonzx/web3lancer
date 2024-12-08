import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Notifications from "@/components/Notifications";

export default function NotificationsPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <Sidebar /> */}
      <div className="flex-1">
        {/* <Navbar /> */}
        <Notifications /> 
      </div>
    </div>
  );
}
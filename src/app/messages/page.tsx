import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import MessageSection from "@/components/MessageSection";

export default function Messages() {
  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Message Section */}
        <MessageSection />
      </div>
    </div>
  );
}

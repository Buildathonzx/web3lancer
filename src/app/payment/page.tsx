import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function PaymentPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Payment Content */}
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-4">Payment Information</h1>

          {/* Display payment details and options here */}
          <p>Payment details and options will be displayed here.</p>
          {/* You can use components like Cards or Buttons for styling */}
        </div>
      </div>
    </div>
  );
}

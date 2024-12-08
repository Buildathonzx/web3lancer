'use client';


import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ProfileSection from "@/components/ProfileSection";

export default function ProfilePage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <Sidebar /> */}
      <div className="flex-1">
        {/* Navbar */}
        {/* <Navbar /> */}
        {/* Profile Section */}
        <ProfileSection /> 
      </div>
    </div>
  );
}

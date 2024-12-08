```diff
--- a/src/app/profile/page.tsx
+++ b/src/app/profile/page.tsx
@@ -1,3 +1,17 @@
-export default function Page() {
-  return <div>profile</div>;
+import Navbar from "@/components/Navbar";
+import Sidebar from "@/components/Sidebar";
+import ProfileSection from "@/components/ProfileSection";
+
+export default function ProfilePage() {
+  return (
+    <div className="flex">
+      {/* Sidebar */}
+      <Sidebar />
+      <div className="flex-1">
+        {/* Navbar */}
+        <Navbar />
+        {/* Profile Section */}
+        <ProfileSection /> 
+      </div>
+    </div>
+  );
 }
```
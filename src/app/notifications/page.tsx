```diff
--- a/src/app/notifications/page.tsx
+++ b/src/app/notifications/page.tsx
@@ -1,3 +1,15 @@
-export default function Page() {
-  return <div>notifications</div>;
+import Navbar from "@/components/Navbar";
+import Sidebar from "@/components/Sidebar";
+import Notifications from "@/components/Notifications";
+
+export default function NotificationsPage() {
+  return (
+    <div className="flex">
+      {/* Sidebar */}
+      <Sidebar />
+      <div className="flex-1">
+        <Navbar />
+        <Notifications /> 
+      </div>
+    </div>
+  );
 }
```
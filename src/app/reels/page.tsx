```diff
--- a/src/app/reels/page.tsx
+++ b/src/app/reels/page.tsx
@@ -1,3 +1,24 @@
-export default function Reels() {
-  return <div>Reels</div>;
+import Navbar from "@/components/Navbar";
+import Sidebar from "@/components/Sidebar";
+
+export default function ReelsPage() {
+  return (
+    <div className="flex">
+      {/* Sidebar */}
+      <Sidebar />
+
+      {/* Main Content */}
+      <div className="flex-1">
+        {/* Navbar */}
+        <Navbar />
+
+        {/* Reels Feed */}
+        <div className="p-4">
+          {/* Placeholder for Reels content */}
+          <div>Reels Feed (Placeholder)</div> 
+          {/* Implement your reels feed logic here */}
+        </div>
+      </div>
+    </div>
+  );
 }
```
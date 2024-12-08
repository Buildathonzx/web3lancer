```diff
--- a/src/app/messages/page.tsx
+++ b/src/app/messages/page.tsx
@@ -1,3 +1,22 @@
-export default function Messages() {
-  return <div>Messages</div>;
+import Navbar from "@/components/Navbar";
+import Sidebar from "@/components/Sidebar";
+import MessageSection from "@/components/MessageSection";
+
+export default function Messages() {
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
+        {/* Message Section */}
+        <MessageSection />
+      </div>
+    </div>
+  );
 }
```
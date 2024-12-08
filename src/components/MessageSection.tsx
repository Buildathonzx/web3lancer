```diff
--- a/src/components/MessageSection.tsx
+++ b/src/components/MessageSection.tsx
@@ -0,0 +1,63 @@
+import React from 'react';
+import { Link } from 'react-router-dom'; // Assuming you're using react-router
+
+interface Message {
+  sender: {
+    profilePicture?: string;
+    name: string;
+  };
+  preview: string;
+  timestamp: string;
+}
+
+const MessageSection: React.FC = () => {
+  const messages: Message[] = [
+    {
+      sender: {
+        profilePicture: '/default-profile.png', // Replace with actual profile picture URL
+        name: 'John Doe',
+      },
+      preview: 'Hey there! I have a question about your services.',
+      timestamp: '10:30 AM',
+    },
+    // Add more messages here
+  ];
+
+  return (
+    <div className="bg-white shadow-md rounded-lg p-4">
+      <h3 className="text-lg font-semibold text-gray-800 mb-4">Messages</h3>
+      <ul className="space-y-3">
+        {messages.map((message, index) => (
+          <li key={index} className="flex items-center">
+            <img
+              src={message.sender.profilePicture || '/default-profile.png'}
+              alt={`${message.sender.name} profile`}
+              className="rounded-full w-8 h-8 object-cover mr-3"
+            />
+            <Link to="/messages" className="flex-grow"> {/* Replace '/messages' with your actual messages page route */}
+              <div>
+                <span className="font-medium text-gray-800">{message.sender.name}</span>
+                <span className="text-sm text-gray-600 ml-2">{message.preview}</span>
+              </div>
+              <span className="text-xs text-gray-500">{message.timestamp}</span>
+            </Link>
+          </li>
+        ))}
+      </ul>
+      <Link to="/messages" className="mt-4 text-blue-500 hover:underline block text-center"> {/* Replace '/messages' with your actual messages page route */}
+        View All Messages
+      </Link>
+    </div>
+  );
+};
+
+export default MessageSection;
```

**How to apply the diff:**

1.  Create a new file named `MessageSection.tsx` in your `src/components` directory.
2.  Copy the code from the diff above and paste it into the new file.
3.  **Install `react-router-dom` if you haven't already:**  
    ```bash
    npm install react-router-dom
    ```
4.  Import and use the `MessageSection` component in your desired location.

**Important notes**

*  Replace placeholder image, names, content with actual data
*  Adjust messages page route
*  Customize styling as needed.
* Ensure that the routes to the messages page is correctly set up.
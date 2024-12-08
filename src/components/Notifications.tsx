import React, { useState, useEffect } from 'react';

interface Notification {
  id: number;
  type: 'success' | 'error' | 'warning';
  message: string;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [timeoutIds, setTimeoutIds] = useState<number[]>([]);

  useEffect(() => {
    const handleNotification = (notification: Notification) => {
      setNotifications((prevNotifications) => [...prevNotifications, notification]);
      const timeoutId = setTimeout(() => {
        setNotifications((prevNotifications) =>
          prevNotifications.filter((n) => n.id !== notification.id)
        );
      }, 5000);
      setTimeoutIds((prevTimeoutIds) => [...prevTimeoutIds, timeoutId]);
    };

    // Example usage:
    // handleNotification({ id: 1, type: 'success', message: 'Notification message' });

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  return (
    <div className="notifications">
      {notifications.map((notification) => (
        <div key={notification.id} className={`notification ${notification.type}`}>
          <span>{notification.message}</span>
          <button
            onClick={() =>
              setNotifications((prevNotifications) =>
                prevNotifications.filter((n) => n.id !== notification.id)
              )
            }
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
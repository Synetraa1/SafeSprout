import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../auth/AuthContext';

const NotificationCenter = () => {
  const { user, isAuthenticated } = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      if (!user?._id) return;
      try {
        const res = await axios.get(`/api/notifications/due?userId=${user._id}`);
        setNotifications(res.data.notifications || []);
      } catch (err) {
        setNotifications([]);
      } finally {
        setLoading(false);
      }
    };
    if (isAuthenticated) fetchNotifications();
  }, [user, isAuthenticated]);

  if (!isAuthenticated) return null;
  if (loading) return <div className="notification-center">Loading notifications...</div>;
  if (!notifications.length) return <div className="notification-center">No care tasks due!</div>;

  return (
    <div className="notification-center">
      <h4>Care Notifications</h4>
      <ul>
        {notifications.map((n, idx) => (
          <li key={idx}>
            <strong>{n.nickname || n.plantName}</strong>: {n.task.charAt(0).toUpperCase() + n.task.slice(1)} due
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationCenter;

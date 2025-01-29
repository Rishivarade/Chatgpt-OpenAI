import React from 'react';
import { Link } from 'react-router-dom';
import './chatlist.css';
import { useQuery } from '@tanstack/react-query';

const Chating = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['userchats'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/userchats`, {
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    },
  });

  return (
    <>
      <div className="div">
        <span></span>
      </div>
      <div className="chatlist">
        <span className="title">DASHBOARD</span>
        <Link to="/dashboard">Create a New Chat</Link>
        <Link to="#">Explore Rish AI</Link>
        <Link to="#">Contact</Link>
        <hr />
        <span className="title">RECENT CHATS</span>
        <div className="list">
          {isLoading ? (
            'Loading...'
          ) : error ? (
            <span className="error-message">{error.message || 'Something went wrong!'}</span>
          ) : (
            data?.map((chat) => (
              <Link to={`/dashboard/chats/${chat._id}`} key={chat._id}>
                {chat.title}
              </Link>
            ))
          )}
        </div>
        <hr />
        <div className="upgrade">
          <img src="/logo.png" alt="RishAI Logo" />
          <div className="texts">
            <span>Upgrade to RishAI Pro</span>
            <span>Get access to more features</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chating;

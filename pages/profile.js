import React from 'react';
import 'animate.css';
import { useAuth } from '../utils/context/authContext';
import UserMembersOnDom from './usersMembersOnDom';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="animate__animated animate__bounceInDown">
      <h1>Your Info:</h1>
      <h5>{user.displayName}</h5>
      <h5>Email: {user.email}</h5>
      <br />
      <h1>Your Characters</h1>
      <UserMembersOnDom />
    </div>
  );
}

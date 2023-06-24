/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getUsersMembers } from '../api/memberData';
import MemberCard from '../components/cards/memberCard';
import { useAuth } from '../utils/context/authContext';

export default function UserMembersOnDom() {
  const [member, setMember] = useState([]);
  const { user } = useAuth();

  const getEveryone = () => {
    getUsersMembers(user.uid).then(setMember);
  };

  useEffect(() => {
    getEveryone();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <div className="d-flex flex-wrap">
          {member.map((memberObj) => (
            <MemberCard key={memberObj.firebaseKey} memberObj={memberObj} onUpdate={getEveryone} />
          ))}
        </div>

      </div>
    </>
  );
}

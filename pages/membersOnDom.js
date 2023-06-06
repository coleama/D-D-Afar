/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getAllMembers } from '../api/memberData';
import MemberCard from '../components/cards/memberCard';

export default function MembersOnDom() {
  const [member, setMember] = useState([]);

  const getEveryone = () => {
    getAllMembers().then(setMember);
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

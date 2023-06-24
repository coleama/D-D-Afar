/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deleteMember } from '../../api/memberData';
import { useAuth } from '../../utils/context/authContext';

export default function MemberCard({ memberObj, onUpdate }) {
  const deleteThisMember = () => {
    if (window.confirm(`Delete ${memberObj.char_name}?`)) {
      deleteMember(memberObj.firebaseKey).then(() => onUpdate());
    }
  };
  console.warn(memberObj);
  const { user } = useAuth();
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{memberObj.char_name}</Card.Title>
        <p>Class: {memberObj.className}</p>
        <p>Race: {memberObj.raceName}</p>
        <h6>Character Stats: </h6>
        <p>Strength: {memberObj.strength}</p>
        <p>Dexterity: {memberObj.dexterity}</p>
        <p>Wisdom: {memberObj.wisdom}</p>
        <p>Intelligence: {memberObj.intelligence}</p>
        <p>Charisma: {memberObj.charisma}</p>
        <p>Constitution: {memberObj.constitution}</p>
        <p>Strength: {memberObj.strength}</p>
        <Link href={`/member/${memberObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {memberObj.uid === user.uid && (
        <Link href={`/member/editMember/${memberObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        ) }
        {memberObj.uid === user.uid && (
        <Button variant="danger" onClick={deleteThisMember} className="m-2">
          DELETE
        </Button>
        )}
      </Card.Body>
    </Card>
  );
}

MemberCard.propTypes = {
  memberObj: PropTypes.shape({
    image: PropTypes.string,
    char_name: PropTypes.string,
    status: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

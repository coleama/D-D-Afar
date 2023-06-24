import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { deletePartyMembers } from '../../api/mergedData';
import { useAuth } from '../../utils/context/authContext';

export default function PartyCard({ partyObj, onUpdate }) {
  const deleteThisParty = () => {
    if (window.confirm(`Delete ${partyObj.party_name} and their members`)) {
      deletePartyMembers(partyObj.firebaseKey).then(() => onUpdate());
    }
  };
  const { user } = useAuth();
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={partyObj.image} alt={partyObj.party_name} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{partyObj.party_name}</Card.Title>
          <p>{partyObj.favorite && <span className="badge bg-secondary">Favorite</span> }</p>
          <Link href={`/party/${partyObj.firebaseKey}`} passHref>
            <Button variant="primary" className="m-2">VIEW</Button>
          </Link>
          {partyObj.uid === user.uid && (
          <Link href={`/party/editParty/${partyObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          )}
          {partyObj.uid === user.uid && (
          <Button variant="danger" onClick={deleteThisParty} className="m-2">
            DELETE
          </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

PartyCard.propTypes = {
  partyObj: PropTypes.shape({
    uid: PropTypes.string,
    party_name: PropTypes.string,
    image: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

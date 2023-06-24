/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleMember } from '../../api/memberData';

export default function ViewMember() {
  const [memberDetails, setMemberDetails] = useState({});
  const router = useRouter();

  // TODO: grab firebaseKey from url
  const { firebaseKey } = router.query;

  // TODO: make call to API layer to get the data
  useEffect(() => {
    getSingleMember(firebaseKey).then(setMemberDetails);
  }, [firebaseKey]);

  return (
    <div className="character-sheet">
      <h1>Character Sheet</h1>
      <div className="character-info">
        <div className="info-section">
          <h2>Name: {memberDetails.char_name}</h2>
        </div>
        <br />
        <div className="info-section">
          <h2>Class: {memberDetails.className}</h2>
        </div>
        <div className="info-section">
          <h2>Race: {memberDetails.raceName}</h2>
        </div>
        <div className="info-section">
          <h2>BackStory: {memberDetails.backStory}</h2>
        </div>
      </div>
      <div className="ability-scores">
        <h2>Ability Scores</h2>
        <div className="ability-section">
          <label htmlFor="strength">Strength: {memberDetails.strength}</label>
        </div>
        <div className="ability-section">
          <label htmlFor="dexterity">Dexterity: {memberDetails.dexterity}</label>
        </div>
        <div className="ability-section">
          <label htmlFor="constitution">Constitution: {memberDetails.constitution}</label>
        </div>
        <div className="ability-section">
          <label htmlFor="intelligence">Intelligence: {memberDetails.intelligence}</label>
        </div>
        <div className="ability-section">
          <label htmlFor="wisdom">Wisdom: {memberDetails.wisdom}</label>
        </div>
        <div className="ability-section">
          <label htmlFor="charisma">Charisma: {memberDetails.charisma}</label>
        </div>
      </div>
    </div>
  );
}

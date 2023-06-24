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
          <h2>{memberDetails.char_name}</h2>
          <input type="text" />
        </div>
        <div className="info-section">
          <h2>{memberDetails.className}</h2>
          <input type="text" />
        </div>
        <div className="info-section">
          <h2>Level</h2>
          <input type="number" min="1" />
        </div>
        <div className="info-section">
          <h2>{memberDetails.raceName}</h2>
          <input type="text" />
        </div>
      </div>
      <div className="ability-scores">
        <h2>Ability Scores</h2>
        <div className="ability-section">
          <label htmlFor="strength">Strength:</label>
          <input type="number" id="strength" min="1" />
        </div>
        <div className="ability-section">
          <label htmlFor="dexterity">Dexterity:</label>
          <input type="number" id="dexterity" min="1" />
        </div>
        <div className="ability-section">
          <label htmlFor="constitution">Constitution:</label>
          <input type="number" id="constitution" min="1" />
        </div>
        <div className="ability-section">
          <label htmlFor="intelligence">Intelligence:</label>
          <input type="number" id="intelligence" min="1" />
        </div>
        <div className="ability-section">
          <label htmlFor="wisdom">Wisdom:</label>
          <input type="number" id="wisdom" min="1" />
        </div>
        <div className="ability-section">
          <label htmlFor="charisma">Charisma:</label>
          <input type="number" id="charisma" min="1" />
        </div>
      </div>
    </div>
  );
}

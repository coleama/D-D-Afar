/* eslint-disable no-lone-blocks */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { NameContext } from '../../utils/context/BuilderContext/NameContext';
import { ClassContext } from '../../utils/context/BuilderContext/ContextForClass';
import { StatsContext } from '../../utils/context/BuilderContext/StatsContext';
import { RaceContext } from '../../utils/context/BuilderContext/RaceContext';
import { BackstoryContext } from '../../utils/context/BuilderContext/DescriptionContext';
import { createMember } from '../../api/memberData';
import { useAuth } from '../../utils/context/authContext';

export default function ViewMember() {
  const { user } = useAuth();
  const nameValue = useContext(NameContext);
  const classValue = useContext(ClassContext);
  const statsValue = useContext(StatsContext);
  const raceValue = useContext(RaceContext);
  const backStoryValue = useContext(BackstoryContext);
  const memberDetails = {
    ...nameValue,
    ...classValue,
    ...statsValue,
    ...raceValue,
    ...backStoryValue,
  };
  const finalObj = {
    char_name: memberDetails.nameData.char_name,
    className: memberDetails.classData.className,
    raceName: memberDetails.raceData.raceName,
    strength: memberDetails.statsData.strength,
    dexterity: memberDetails.statsData.dexterity,
    constitution: memberDetails.statsData.constitution,
    intelligence: memberDetails.statsData.intelligence,
    charisma: memberDetails.statsData.charisma,
    wisdom: memberDetails.statsData.wisdom,
    backStory: memberDetails.descData.backStory,
  };
  console.warn(finalObj);

  const handleClick = (e) => {
    e.preventDefault();
    const payload = { ...finalObj, uid: user.uid };
    createMember(payload).then(() => {
      { /* router.push('/'); */ }
    });
  };
  // console.warn(storedClassData);
  return (
    <>
      <Link href="/Builder/Renders/descriptionRender" passHref>
        <Button variant="primary" className="m-2">Previous</Button>
      </Link>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>{memberDetails.nameData.char_name}</Card.Title>
          <p>{memberDetails.classData.className}</p>
          <p>{memberDetails.raceData.raceName}</p>
          <h6>Character Stats: </h6>
          <p>Strength: {memberDetails.statsData.strength}</p>
          <p>Dexterity: {memberDetails.statsData.dexterity}</p>
          <p>Wisdom: {memberDetails.statsData.wisdom}</p>
          <p>Intelligence: {memberDetails.statsData.intelligence}</p>
          <p>Charisma: {memberDetails.statsData.charisma}</p>
          <p>Constitution: {memberDetails.statsData.constitution}</p>
          <Button onClick={handleClick}>Save your Adventurer!</Button>
        </Card.Body>
      </Card>
    </>
  );
}

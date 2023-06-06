/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getRace } from '../../api/builderdata';
import RaceCard from '../../components/cards/raceCards';
// import { RaceContextProvider } from '../../utils/context/BuilderContext/RaceContext';

export default function RaceSelection() {
  const [raceData, setRaceData] = useState([]);

  useEffect(() => {
    getRace().then(setRaceData);
  }, []);
  console.warn(raceData);
  return (
    <>
      <Link href="/Builder/Renders/ClassSelectorRender" passHref>
        <Button variant="primary" className="m-2">Previous</Button>
      </Link>
      <Link href="/Builder/Renders/StatsRender" passHref>
        <Button variant="primary" className="m-2">Next</Button>
      </Link>
      <div className="text-white ms-5 details">
        <h1>
          Pick A Race
        </h1>
      </div>
      <div className="d-flex flex-wrap">
        {raceData.length > 0 ? (
          raceData.map((raceObj) => (
            <RaceCard key={raceObj.firebaseKey} raceObj={raceObj} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
}

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import 'animate.css';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getClass } from '../../api/builderdata';
import ClassCard from '../../components/cards/classCards';
// import { ClassContextProvider } from '../../utils/context/BuilderContext/ContextForClass';

export default function ClassSelection() {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    getClass().then(setClassData);
  }, []);
  console.warn(classData);
  return (
    <>
      <div className="animate__animated animate__bounceInRight">
        <Link href="/Builder/Renders/NameRender" passHref>
          <Button variant="primary" className="m-2">Previous</Button>
        </Link>
        <Link href="/Builder/Renders/RaceRender" passHref>
          <Button variant="primary" className="m-2">Next</Button>
        </Link>
        <div className="text-white ms-5 details">
          <h1>
            Pick A Class
          </h1>
        </div>
        <div className="d-flex flex-wrap">
          {classData.length > 0 ? (
            classData.map((classObj) => (
              <ClassCard key={classObj.firebaseKey} classObj={classObj} />
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </>
  );
}

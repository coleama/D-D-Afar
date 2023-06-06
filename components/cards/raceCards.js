import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { RaceContext } from '../../utils/context/BuilderContext/RaceContext';

export default function RaceCard({ raceObj }) {
  const [isActive, setIsActive] = useState(false);
  const { handleButtonClick } = useContext(RaceContext);
  const handleClick = () => {
    setIsActive((current) => !current);
    handleButtonClick(raceObj);
  };
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={raceObj.image} alt={raceObj.raceName} style={{ height: '300px' }} />
        <Card.Body>
          <Card.Title>{raceObj.raceName}</Card.Title>
          <p>{raceObj.description}</p>
          <Button
            style={{
              backgroundColor: isActive ? 'red' : '',
              color: isActive ? 'white' : '',
            }}
            onClick={handleClick}
          >Select this Race
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

RaceCard.propTypes = {
  raceObj: PropTypes.shape({
    raceName: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

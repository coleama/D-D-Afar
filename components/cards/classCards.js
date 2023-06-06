import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { ClassContext } from '../../utils/context/BuilderContext/ContextForClass';

export default function ClassCard({ classObj }) {
  const [isActive, setIsActive] = useState(false);
  const { updateContext } = useContext(ClassContext);
  const handleClick = () => {
    setIsActive((current) => !current);
    updateContext(classObj);
  };
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={classObj.imageURL} alt={classObj.className} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{classObj.className}</Card.Title>
          <p>{classObj.description}</p>
          <Button
            style={{
              backgroundColor: isActive ? 'red' : '',
              color: isActive ? 'white' : '',
            }}
            onClick={handleClick}
          >Select this Class
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

ClassCard.propTypes = {
  classObj: PropTypes.shape({
    className: PropTypes.string,
    imageURL: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

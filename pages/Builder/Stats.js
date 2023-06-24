import React, { useState, useContext } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { StatsContext } from '../../utils/context/BuilderContext/StatsContext';

const initialState = {
  strength: '',
  dexterity: '',
  constitution: '',
  intelligence: '',
  charisma: '',
  wisdom: '',
};

function StatsForm() {
  const [formInput, setFormInput] = useState(initialState);
  const { updateContext } = useContext(StatsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContext(formInput);
    setFormInput(initialState);
  };

  return (
    <div className="animate__animated animate__bounceInRight">
      <Link href="/Builder/Renders/RaceRender" passHref>
        <Button variant="primary" className="m-2">Previous</Button>
      </Link>
      <Link href="/Builder/Renders/descriptionRender" passHref>
        <Button variant="primary" className="m-2">Next</Button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridStr">
            <Form.Label>Strength</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Strength"
              name="strength"
              value={formInput.strength}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDex">
            <Form.Label>Dexterity</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Dexterity"
              name="dexterity"
              value={formInput.dexterity}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCharisma">
            <Form.Label>Charisma</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Charisma"
              name="charisma"
              value={formInput.charisma}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridInt">
            <Form.Label>Intelligence</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Intelligence"
              name="intelligence"
              value={formInput.intelligence}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridWis">
            <Form.Label>Wisdom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Wisdom"
              name="wisdom"
              value={formInput.wisdom}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCon">
            <Form.Label>Constitution</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Constitution"
              name="constitution"
              value={formInput.constitution}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button type="submit">Save your Stats</Button>
      </Form>
    </div>
  );
}

StatsForm.propTypes = {
  obj: PropTypes.shape({
    strength: PropTypes.string,
    dexterity: PropTypes.string,
    constitution: PropTypes.string,
    intelligence: PropTypes.string,
    charisma: PropTypes.string,
    wisdom: PropTypes.string,
  }),
};

StatsForm.defaultProps = {
  obj: initialState,
};

export default StatsForm;

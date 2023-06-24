import React, { useState, useContext } from 'react';
import 'animate.css';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { NameContext } from '../../utils/context/BuilderContext/NameContext';

const initialState = {
  char_name: '',
};
// can not wrap in this file must wrap context provider where ever i render it
function NameForm() {
  const [formInput, setFormInput] = useState(initialState);
  const { updateContext } = useContext(NameContext);

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
    <div className="animate__animated animate__bounceInDown">
      <Link href="/Builder/Renders/ClassSelectorRender" passHref>
        <Button variant="primary" className="m-2">Next</Button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Character Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Character Name"
          name="char_name"
          value={formInput.char_name}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default NameForm;

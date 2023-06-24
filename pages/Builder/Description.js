import React, { useState, useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { BackstoryContext } from '../../utils/context/BuilderContext/DescriptionContext';

const initialState = {
  backStory: '',
};
// can not wrap in this file must wrap context provider where ever i render it
function BackStoryForm() {
  const [formInput, setFormInput] = useState(initialState);
  const { updateContext } = useContext(BackstoryContext);

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
      <Link href="/Builder/Renders/StatsRender" passHref>
        <Button variant="primary" className="m-2">Previous</Button>
      </Link>
      <Link href="/Builder/Renders/overViewRender" passHref>
        <Button variant="primary" className="m-2">Next</Button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Label>backStory</Form.Label>
        <Form.Control
          type="text"
          placeholder="Short Character BackStory"
          name="backStory"
          value={formInput.backStory}
          onChange={handleChange}
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default BackStoryForm;

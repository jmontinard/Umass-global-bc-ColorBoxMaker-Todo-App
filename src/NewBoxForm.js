import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function NewBoxForm({ createBox }) {
  const [formData, setFormData] = useState({
    width: '',
    height: '',
    backgroundColor: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = { ...formData, id: uuidv4() };
    createBox(newBox);
    setFormData({
      width: '',
      height: '',
      backgroundColor: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="text"
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="text"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          type="text"
          id="backgroundColor"
          name="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;

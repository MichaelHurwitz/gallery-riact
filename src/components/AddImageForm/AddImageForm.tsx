import React, { useState } from 'react';
import { Image } from '../../types';
import './AddImageForm.css';

interface AddImageFormProps {
  addImage: (newImage: Image) => void;
}

const AddImageForm: React.FC<AddImageFormProps> = ({ addImage }) => {
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newImage: Image = {
      id: Math.random().toString(36).substr(2, 9),
      urls: { regular: url, small: url },
      alt_description: description || 'No description provided',
      user: { name: 'Anonymous' },
      likes: 0,
      description,
    };

    addImage(newImage);
    setUrl('');
    setDescription('');
  };

  return (
    <form className="add-image-form" onSubmit={handleSubmit}>
      <h2>Add a New Image</h2>
      <input
        type="text"
        placeholder="Image URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Image</button>
    </form>
  );
};

export default AddImageForm;

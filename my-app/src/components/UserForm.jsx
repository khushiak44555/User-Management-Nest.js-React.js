import React, { useState } from 'react';
import { createUser, updateUser } from '../api';
import './UserForm.css'; // Add a CSS file for styling

const UserForm = ({ currentUser, onFormSubmit }) => {
  const [name, setName] = useState(currentUser ? currentUser.name : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentUser) {
        await updateUser(currentUser.id, { name });
      } else {
        await createUser({ name });
      }
      onFormSubmit();
      setName('');
    } catch (error) {
      console.error('Error creating/updating user:', error);
      alert('Error creating/updating user');
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        className="form-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
        required
      />
      <button className="form-button" type="submit">
        {currentUser ? 'Update User' : 'Create User'}
      </button>
    </form>
  );
};

export default UserForm;

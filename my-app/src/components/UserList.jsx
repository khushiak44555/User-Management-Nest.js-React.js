import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../api';
import UserForm from './UserForm';
import './UserList.css'; // Add a CSS file for styling

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const loadUsers = async () => {
    const response = await fetchUsers();
    setUsers(response.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleEdit = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  const handleFormSubmit = () => {
    setIsEditing(false);
    setCurrentUser(null);
    loadUsers();
  };

  return (
    <div className="user-list-container">
      <UserForm currentUser={currentUser} onFormSubmit={handleFormSubmit} />
      <h2 className="list-title">User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

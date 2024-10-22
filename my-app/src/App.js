import React from 'react';
import UserList from './components/UserList';
import './App.css'; // Import your CSS file if you have styles

const App = () => {
  return (
    <div className="App">
      <h1>User Management</h1>
      <UserList />
    </div>
  );
};

export default App;

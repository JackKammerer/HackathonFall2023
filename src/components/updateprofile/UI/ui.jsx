import React, { useState } from 'react';
import './ui.scss';

const UI = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [major, setMajor] = useState('');
  const [classes, setClasses] = useState('');

  const handleUpdate = () => {
    console.log('Updated data:');
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Year:', year);
    console.log('Major:', major);
    console.log('Classes:', classes);
  };

  return (
    <div>
      <div className="menu"> {/* Changed class name from card to menu */}
        <h1 className="title">Edit Profile</h1>
        <div className="profile-picture-container">
          <div className="profile-picture">
            <img src="hero.png" alt="Profile Picture" />
            <div className="overlay">
              <div className="overlay-text">Change Profile Picture</div>
            </div>
          </div>
        </div>

        <div className="card-description"> {/* Corrected the class name to card-description */}
          <div className="form-field">
            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Year:</label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Major:</label>
            <input
              type="text"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label>Classes:</label>
            <input
              type="text"
              value={classes}
              onChange={(e) => setClasses(e.target.value)}
            />
          </div>
          <button className="update" onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default UI;

import React, { useState } from 'react';
import './ui.scss';
import axios from 'axios';
const UI = () => {
    const [username, setUsername] = useState(''); // Initialize state for username
    const [email, setEmail] = useState(''); // Initialize state for email
    const [names, setName] = useState(''); // Initialize state for name
    const [major, setMajor] = useState(''); // Initialize state for major
    const [classes, setClasses] = useState(''); // Initialize state for classes
    

    const handleUpdate = () => {
        // Handle the update logic here
        // You can save the data to your backend or perform any necessary action
        const dataToSend = {
            username: email,
            name: names,
            major: major,
            Classes: classes,
        }
        const apiUrl = 'http://localhost:3000/updateprofile'; // Replace with your actual backend endpoint URL
        axios
        .post(apiUrl, dataToSend)
        .then((response) => {
          
          console.log("hello there")
        })
        .catch((error) => {
          // Handle errors
          console.error('Error:', error);
        });
    };

    return (
        <div>
            <div className="menu">
                <h1 className="title">Edit Profile</h1>
                <div className="profile-picture-container">
                    <div className="profile-picture">
                        <div className="overlay">
                            <div className="overlay-text">Change Profile Picture</div>
                        </div>
                    </div>
                </div>

                <div className="card-descripton">
                    <div className="form-field">
                        <label>Username:</label>
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
                            value={names}
                            onChange={(e) => setName(e.target.value)}
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
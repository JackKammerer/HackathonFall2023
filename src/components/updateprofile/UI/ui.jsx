import React, { useState } from 'react';
import './ui.scss';

const UI = () => {
    const [email, setEmail] = useState(''); // Initialize state for email
    const [name, setName] = useState(''); // Initialize state for name
    const [year, setYear] = useState(''); // Initialize state for year
    const [major, setMajor] = useState(''); // Initialize state for major
    const [classes, setClasses] = useState(''); // Initialize state for classes

    const handleUpdate = () => {
        // Handle the update logic here
        // You can save the data to your backend or perform any necessary action
        console.log('Updated data:');
        console.log('Email:', email);
        console.log('Name:', name);
        console.log('Year:', year);
        console.log('Major:', major);
        console.log('Classes:', classes);
    };

    return (
        <div>
            <div className="menu">
                <h1 className="title">Edit Profile</h1>
                <div className="profile-picture-container">
                    <div className="profile-picture">
                        <img src="hero.png" alt="Profile Picture" />
                        <div className="overlay">
                            <div className="overlay-text">Change Profile Picture</div>
                        </div>
                    </div>
                </div>

                <div className="card-descripton">
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
import React, { useState } from 'react';
import './newprofile.scss'; // Import your CSS file
import { Link } from 'react-router-dom';

function NewProfile() {
  const [username, setUsername] = useState('');
  const [email , setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [major, setMajor] = useState('');
  const [classes, setClasses] = useState('');
  const [discord, setDiscord] = useState('');
  const [gpa, setGpa] = useState('');
  const [description, setDescription] = useState('');


  const handleLogin = () => {
    const data = {
      Name: userName,
      Email: userEmail,
      Password: userPassword,
      Major: userMajor,
      Class: userClassesTaken,
    }
      // Make a fetch request to your backend using the relative URL.
    
  } 

  return (
    <div id="card-profile">
      <div id="card-content">
        <div id="card-title">
          <h2>NEW USER</h2>
          <div className="underline-title"></div>
        </div>
        <form method="post" className="form">
          <label for="user-email">
            &nbsp;Email
          </label>
          <input id="user-email" className="form-content" type="email" name="email" autoComplete="on" required  />
          <div className="form-border"></div>
          <label for="user-password" style={{ paddingTop: '22px' }}>
            &nbsp;Password
          </label>
          <input id="user-password" className="form-content" type="password" name="password" required />
          <div className="form-border"></div>
          <label for="user-name" style={{ paddingTop: '22px' }}>
            &nbsp;Name
          </label>
          <input id="user-name" className="form-content" type="text" name="name" required />
          <div className="form-border"></div>
          <label for="user-major" style={{ paddingTop: '22px' }}>
            &nbsp;Field of Study
          </label>
          <input id="user-major" className="form-content" type="text" name="major" required />
          <div className="form-border"></div>
          <label for="user-classes-taken" style={{ paddingTop: '22px' }}>
            &nbsp;Classes taken:
          </label>
          <input id="user-classes-taken" className="form-content" type="text" name="classes-taken" />
          <div className="form-border"></div>
          <label for="user-photo" style={{ paddingTop: '22px' }}>
            &nbsp;Upload a picture of yourself!
          </label>
          <input id="user-photo" className="form-content" type="file" name="photo" />
          <div className="form-border"></div>
          {/*<input id="submit-btn" type="submit" name="submit" value="CREATE" />*/}
          <button type = "button" onClick = {handleLogin} id = "submit-btn">Submit</button>
          {/* <Link to="/" id = "submit-btn">
                Create
          </Link> */}

        </form>
      </div>
    </div>
  );
}

export default NewProfile;

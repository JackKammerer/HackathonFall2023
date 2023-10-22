import React from 'react';
import "./button.scss"
import UI from '../components/updateprofile/UI/ui';
import { Link } from 'react-router-dom';

function UpdateProfile() {
  return (
    <div> 
      <UI />
      <div className="button-container">
        <button>
          <Link to="/homepage">Home</Link>  
        </button>
      </div>
    </div>
  );
}

export default UpdateProfile;




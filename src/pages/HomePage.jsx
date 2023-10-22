import React from 'react';
import Hero from '../components/home/hero/Hero';
import Card from '../components/home/card/Card';
import { Link } from 'react-router-dom'; 
import "./button.scss"
const cardData = [
  {
    name: "John Doe",
    image: "./john-doe.jpg",
    year: "Senior",
    major: "Computer Science",
    classes: ["CSCI 101", "MATH 201", "PHYS 301"],
    description: "A passionate computer science student with a love for coding and problem-solving. Let's connect!",
    email: "john.doe@example.com",
    phoneNumber: "123-456-7890",
    discord: "john_doe#1234",
  },
  {
    name: "Jane Smith",
    image: "./jane-smith.jpg",
    year: "Junior",
    major: "Engineering",
    classes: ["ENGR 201", "MATH 202", "PHYS 302"],
    description: "An aspiring engineer who enjoys building things and solving real-world problems. Connect with me to discuss engineering projects!",
    email: "jane.smith@example.com",
    phoneNumber: "987-654-3210",
    discord: "jane_smith#5678",
  },
  // Add more card data objects as needed
];

function HomePage() {
  return (
    <div className='HomePage'>
      <Hero />
      <Card /> 
      <div className= "button-container">
        <button>
          <Link to="/updateprofile">Update Profile</Link>
        </button>
      </div> 
    </div>

  );
}

export default HomePage





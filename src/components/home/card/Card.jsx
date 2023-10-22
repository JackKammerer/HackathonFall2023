import React, { useState } from "react";
import "./card.scss"; // Import your CSS file
const Card = () => {
  const [cardData, setCardData] = useState([
    {
      Name: "John Doe",
      Year: "Senior",
      Major: "Computer Science",
      Classes: ["CSCI 101", "MATH 201", "PHYS 301"],
      Description: "A passionate computer science student with a love for coding and problem-solving. Let's connect!",
      Email: "john.doe@example.com",
      PhoneNumber: "123-456-7890",
      Discord: "john_doe#1234",
      Image: "john-doe.jpg",
    },
    {
      Name: "Jane Smith",
      Year: "Junior",
      Major: "Engineering",
      Classes: ["ENGR 201", "MATH 202", "PHYS 302"],
      Description: "An aspiring engineer who enjoys building things and solving real-world problems. Connect with me to discuss engineering projects!",
      Email: "jane.smith@example.com",
      PhoneNumber: "987-654-3210",
      Discord: "jane_smith#5678",
      Image: "jane-smith.jpg",
    },
    {
      Name: "Jane Smith",
      Year: "Junior",
      Major: "Engineering",
      Classes: ["ENGR 201", "MATH 202", "PHYS 302"],
      Description: "An aspiring engineer who enjoys building things and solving real-world problems. Connect with me to discuss engineering projects!",
      Email: "jane.smith@example.com",
      PhoneNumber: "987-654-3210",
      Discord: "jane_smith#5678",
      Image: "jane-smith.jpg",
    },
    {
      Name: "Jane Smith",
      Year: "Junior",
      Major: "Engineering",
      Classes: ["ENGR 201", "MATH 202", "PHYS 302"],
      Description: "An aspiring engineer who enjoys building things and solving real-world problems. Connect with me to discuss engineering projects!",
      Email: "jane.smith@example.com",
      PhoneNumber: "987-654-3210",
      Discord: "jane_smith#5678",
      Image: "jane-smith.jpg",
    },
    // Add more card data objects as needed
  ]);

  return (
    <div className="card-ex">
      {cardData.map((card, index) => (
        <div key={index} className="content-left">
          <div className="card-content">
            <h1 className="name">Name: {card.Name}</h1>
            <div className="image-container">
              <img src={card.Image} alt="" />
            </div>
            <p>Year: {card.Year}</p>
            <p>Major: {card.Major}</p>
            <p>Classes: {card.Classes.join(", ")}</p>
            <p>Description: {card.Description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

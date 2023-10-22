import React, { useState } from "react";
import TinderCard from 'react-tinder-card';
import './Card.scss'; // Assuming you have a CSS file named Card.css for styles

const initialX = 0; // Set an initial X position

const Card = () => {
  const [isFlipped, setFlipped] = useState(false);
  const [matched, setMatched] = useState([]); // Initialize the matched cards array

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      // Swiped right, so flip the card
      setFlipped(true);
    } else if (direction === 'left') {
      // Swiped left, so flip the card and add it to the "matched" array
      setFlipped(true);
      // Add card data to the "matched" array
      setMatched((prevMatched) => [...prevMatched, {/* Add your card data here */}]);
    }
  };

  const resetCard = () => {
    setFlipped(false);
  };

  return (
    <TinderCard
      swipePower={1}
      className={`card-ex ${isFlipped ? "flipped" : ""}`}
      onSwipe={(dir) => handleSwipe(dir)}
      preventSwipe={['up', 'down']} // Specify which directions to prevent swiping
      dragConstraints={{ left: 0, right: 0 }}
      scale={0.2}
    >
      {isFlipped ? (
        <div className="flipped-content">
          <h1 className="contact">Contact-info</h1>
          <div className="contact-body">
            <h2 className="Email">Email: </h2>
            <h2 className="Phone Number">Phone Number: </h2>
            <h2 className="Discord">Discord: </h2>
          </div>
        </div>
      ) : (
        <div className="card-content">
          <h1 className="name">Name</h1>
          <div className="image-container">
            <img src="./hero.png" alt="" />
          </div>
          <div className="year">
            <h2>Year:</h2>
          </div>
          <div className="major">
            <h2>Major:</h2>
          </div>
          <div className="classes">
            <h2>Classes:</h2>
          </div>
          <div className="description">
            <h2>Description:</h2>
          </div>
        </div>
      )}
    </TinderCard>
  );
};

export default Card;

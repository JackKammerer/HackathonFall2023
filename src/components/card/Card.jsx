import { motion } from "framer-motion";
import React, { useState } from "react";
import './card.scss';

const initialX = 0; // Set an initial X position

const Card = () => {
  const [isFlipped, setFlipped] = useState(false);

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 400) {
      // Swiped right, so flip the card
      setFlipped(true);
    }
  };

  const resetCard = () => {
    setFlipped(false);
  };

  return (
    <motion.div
      className={`card-ex ${isFlipped ? "flipped" : ""}`}
      drag="x" // Enable horizontal drag
      dragConstraints={{ left: 0, right: 0 }} // Constrain the drag to the horizontal axis
      dragElastic={0.7} // Adjust drag resistance
      style={{ x: initialX }} // Set the initial X position
      onDragEnd={handleDragEnd}
      onClick={resetCard} // Reset the card on click
    >
      {isFlipped ? (
        // Content displayed when card is flipped
        <div className="flipped-content">
            <h1 className="contact">Contact-info</h1>

            <div className="contact-body">
              <h2 className="Email">Email: </h2>
              <h2 className="Phone Number">Phone Number: </h2>
              <h2 className="Discord">Discord: </h2>
            </div>
        </div>
      ) : (
        // Content displayed when card is not flipped
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
    </motion.div>
  );
};

export default Card;
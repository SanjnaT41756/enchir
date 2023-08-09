import './Stars.scss';
import React, { useState } from 'react';
import { StarIcon } from '@chakra-ui/icons';

function Stars() {
  const [rating, setRating] = useState(0); // Initial rating state

  return (
    <div className="star-rating">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`star ${index <= rating ? 'filled' : ''}`}
            onClick={() => setRating(index)}
          >
            <StarIcon />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stars;


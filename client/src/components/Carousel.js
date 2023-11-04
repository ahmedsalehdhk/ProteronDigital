import React, { useState } from 'react';
import Card from '../components/Card'; // Import your custom Card component

// import img from '../assets/service-card-images/api-development.jpg'

const CardCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const nextCard = () => {
    if (currentCard < totalCards - 1) {
      setCurrentCard(currentCard + 1);
    }
  };

  const previousCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    }
  };

  const totalCards = 9; // Total number of cards

  const cards = [
    {
      title: 'Card 1',
      description: 'Description for Card 1',
      imageUrl: '../assets/service-card-images/api-development.jpg',
    },
    {
      title: 'Card 2',
      description: 'Description for Card 2',
      imageUrl: '../assets/service-card-images/api-development.jpg',
    },
    // Add more card objects for each card
  ];

  return (
    <div className="card-carousel">
      <div className="card-carousel-wrapper" style={{ display: 'flex', transition: 'transform 0.3s' }}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card-carousel-card`}
            style={{
              transform: `translateX(${(index - currentCard) * 100}%)`,
            }}
          >
            <Card
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
            />
          </div>
        ))}
      </div>
      <div className="card-carousel-buttons-container">
        <button
          onClick={previousCard}
          className="card-carousel-button card-carousel-previous"
          disabled={currentCard === 0}
        >
          Previous
        </button>
        <button
          onClick={nextCard}
          className="card-carousel-button card-carousel-next"
          disabled={currentCard === totalCards - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;

import React, { useState } from 'react'
import s from './PaginatedCategories.module.css'
import { isMobile } from 'constants/useMediaQueries';

const images = require.context('../../images', true);
const cardsPerPage = 6;

const PaginatedCategories = ({ category }) => {
  const [startIndex, setStartIndex] = useState(0);
  const mobileScreen = isMobile();

  const renderCards = () => {
    const endIndex = startIndex + cardsPerPage;
    
    return mobileScreen
      ? category.map((card, index) => (
          <div key={index} className={s.categoryCard}>
            <img
              className={s.categoryImg}
              src={images(`./${card.logo}`)}
              alt="Step Logo"
            />
            <h3 className={s.categoryTitle}>{card.title}</h3>
          </div>
        ))
      : category.slice(startIndex, endIndex).map((card, index) => (
          <div key={index} className={s.categoryCard}>
            <div style={{ width: '100%', display: 'flex' }}>
              <img
                className={s.categoryImg}
                src={images(`./${card.logo}`)}
                alt="Step Logo"
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '95px',
              }}
            >
              <h3 className={s.categoryTitle}>{card.title}</h3>
            </div>
          </div>
        ));
  };

  const goToPrevCard = () => {
    setStartIndex(prev => prev - 1);
  };

  const goToNextCard = () => {
    setStartIndex(prev => prev + 1);
  };
  return mobileScreen ? (
    <div className={s.paginatedOffers}>{renderCards()}</div>
  ) : (
    <div className={s.category}>
      <button
        className={`${s.arrowBtn} ${s.left}`}
        onClick={goToPrevCard}
        disabled={startIndex === 0}
      >
        &larr;
      </button>
      <button
        className={`${s.arrowBtn} ${s.right}`}
        onClick={goToNextCard}
        disabled={startIndex === category.length - cardsPerPage}
      >
        &rarr;
      </button>
      <div className={s.paginatedOffers}>{renderCards()}</div>
    </div>
  );
};

export default PaginatedCategories
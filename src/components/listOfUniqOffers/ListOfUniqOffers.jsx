import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import s from '../uniqueOffers/UniqueOffers.module.css';
import latka from '../../images/Latka.png';

const ListOfUniqOffers = ({ currentItems, t, isMobileScreen, sectionRef }) => {
  const location = useLocation();
  const isPromotionsPage = location.pathname.includes('/promotions');
console.log(currentItems);
  return (
    <ul className={s.offersList} ref={sectionRef}>
      {currentItems.map(el => (
        <li key={el.id} className={s.offerItem}>
          <img
            className={s.offerImage}
            src={el.img ? el.img : latka}
            alt="latka"
          />
          <div className={s.description}>
            <h3 className={s.offerTitle}>{el.title}</h3>

            <p className={s.itemDescription}>{el.description}</p>

            {isMobileScreen && (
              <p className={s.offerSize}>
                1 {t('Patch')} - {el.size}
              </p>
            )}
          </div>
          {isMobileScreen && (
            <>
              <p className={s.offerPrice}>{el.price}грн</p>
              <NavLink
                to={isPromotionsPage ? `${el.id}` : `/promotions/${el.id}`}
                className={s.offerBuyBtn}
              >
                {t('Order')}
              </NavLink>
             
            </>
          )}
          {!isMobileScreen && (
            <>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                  marginTop: '20px',
                  alignItems: 'center',
                }}
              >
                <p className={s.offerPrice}>{el.price}грн</p>
                <NavLink
                  to={isPromotionsPage ? `${el.id}` : `/promotions/${el.id}`}
                  className={s.offerBuyBtn}
                >
                  {t('Order')}
                </NavLink>
              </div>
              <div className={s.promotionWrapper}>
                <p className={s.promotionDesktop}>Акция действует: </p>
                <div>
                  <p>
                    <span className={s.firstLetters}>
                      {el.startPromotioin.substring(0, 6)}
                    </span>
                    {el.startPromotioin.substring(6)} -
                    <span className={s.firstLetters}>
                      {el.endPromotion.substring(0, 6)}
                    </span>
                    {el.endPromotion.substring(6)}
                  </p>
                </div>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ListOfUniqOffers;

import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import s from './UsedTents.module.css';
import usedTent from '../../images/usedTent.png';
import { isMobile } from 'constants/useMediaQueries';
import PaginatedUniqueOffers from 'components/paginatedUniqueOffers/PaginatedUniqueOffers';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function TentsByUser({
  currentItems,
  handleClick,
  isAccessToken,
  sectionRef,
}) {
  const { t } = useTranslation();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd.MM.yyyy HH:mm');
  };

  return (
    <>
      <ul className={s.usedTentList} ref={sectionRef}>
        {currentItems.map((el, i) => (
          <li
            className={s.usedTentItem}
            key={el.id}
            onClick={() => handleClick(el.id)}
          >
            <img
              className={s.usedTentImage}
              src={el.photo ? `http://127.0.0.1:8000${el.photo}` : usedTent}
              alt={el.title}
            />
            <p className={s.tentTitle}>{el.title}</p>
            <p className={s.tentPrice}>{el.price} грн</p>
            <p className={s.tentLocation}> {el.location}</p>
            <p className={s.date}> {formatDate(el.created_at)}</p>
          </li>
        ))}
      </ul>
      <div>
        <a
          className={`${s.link} ${s.addOgo}`}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfWJaJGUF_m3BUhlbLmJrlWl6SMxDKl6jbqGwwP2fYgOSHDBQ/viewform?usp=sf_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Add announcement')}
        </a>
      </div>
    </>
  );
}

const UsedTents = () => {
  const mobileScreen = isMobile();
  const [usedTents, setUsedTents] = useState([]);

  useEffect(() => {
    const fetchUsedTents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/posts/');
        setUsedTents(response.data);
      } catch (error) {
        console.error('Error fetching used tents:', error);
      }
    };

    fetchUsedTents();
  }, []);

  const navigate = useNavigate();

  const handleClick = id => {
    navigate(`/announcement/${id}`);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  const sectionRef = useRef(null);

  const handleSectionFocus = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return mobileScreen ? (
    <TentsByUser currentItems={usedTents} handleClick={handleClick} />
  ) : (
    <PaginatedUniqueOffers
      itemsPerPage={8}
      items={usedTents}
      Items={TentsByUser}
      handleClick={handleClick}
      sectionRef={sectionRef}
      handleSectionFocus={handleSectionFocus}
    />
  );
};

export default UsedTents;

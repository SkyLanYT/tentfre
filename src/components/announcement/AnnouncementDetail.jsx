import React, { useEffect, useState } from 'react';
import s from './Announcement.module.css';
import { useTranslation } from 'react-i18next';
import logoPhone from '../../images/Phonetel.png';
import moment from 'moment';
import axios from 'axios';
import usedTent from '../../images/usedTent.png';
import { useParams, Link } from 'react-router-dom';

const AnnouncementDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [tent, setTent] = useState(null);
  const [relatedAds, setRelatedAds] = useState([]);

  useEffect(() => {
    const fetchTent = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/${id}/`);
        setTent(response.data);
      } catch (error) {
        console.error('Error fetching the post:', error);
      }
    };

    const fetchRelatedAds = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/posts/`);
        const otherAds = response.data.filter(ad => ad.id !== parseInt(id));
        const limitedAds = otherAds.slice(0, 4); // обмеження до 4 оголошень
        setRelatedAds(limitedAds);
      } catch (error) {
        console.error('Error fetching related ads:', error);
      }
    };

    fetchTent();
    fetchRelatedAds();
  }, [id]);

  if (!tent) {
    return <p>Loading...</p>;
  }

  const { photo, title, created_at, description, location, first_name, last_name, phone_number, price } = tent;
  const formattedDate = moment(created_at).format('DD MMMM YYYY г.');

  return (
    <div className={s.announSection}>
      <h2 className={s.title}>{t('announcement')}</h2>
      <div className={s.annoucementWrapper}>
        <div className={s.imageBox}>
          <img
            className={s.image}
            src={photo ? `${process.env.REACT_APP_API_URL}${photo}` : usedTent}
            alt={title}
            style={{ width: '310px', height: '235px'}}
          />
        </div>
        <div className={s.descriptionWrapper}>
          <h3 className={s.descTitle}>{title}</h3>
          <p className={s.description}>{description}</p>
        </div>
        <div className={s.ownerWrapper}>
          <p className={s.price}>{price} грн</p>
          <p className={s.owner}>{first_name} {last_name}</p>
          <p className={s.tell}>{phone_number}</p>
          <a href={`tel:${phone_number}`} className={s.callBtn}>
            <img src={logoPhone} alt="logo call" />
            {t('Call')}
          </a>
          <div>
            <p className={s.location}>{location}</p>
            <p className={s.createdAt}>{formattedDate}</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className={s.relatedAdsTitle}>{t('Related Ads')}</h2>
        <ul className={s.relatedAdsList} style={{ gap: '20px' }}>
          {relatedAds.map((el) => (
            <li className={s.relatedAdsItem} key={el.id}>
              <Link to={`/announcement/${el.id}`}>
                <img
                  className={s.relatedAdsImage}
                  src={el.photo ? `${process.env.REACT_APP_API_URL}${el.photo}` : usedTent}
                  alt={el.title}
                />
                <p className={s.relatedAdsTitle}>{el.title}</p>
                <p className={s.relatedAdsPrice}>{el.price} грн</p>
                <p className={s.relatedAdsLocation}>{el.location}</p>
                <p className={s.relatedAdsDate}>{moment(el.created_at).format('DD MMMM YYYY г.')}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnnouncementDetail;

import React, { useEffect, useRef, useState } from 'react';
import s from './VideoTutorials.module.css';
import { NavLink } from 'react-router-dom';
import arrowRight from '../../images/moreVideoArrow.png';
import { isMobile } from 'constants/useMediaQueries';
import Video from './Video';

const YOU_TUBE_APIKEY = process.env.REACT_APP_YOU_TUBE_APIKEY;
const CHANEL_ID = process.env.REACT_APP_CHANNEL_ID;

const VideoTutorials = () => {
  const containerRef = useRef(null);
  const [showScrollBack, setShowScrollBack] = useState(false);
  const [videos, setVideos] = useState(JSON.parse(localStorage.getItem("videos"))||[]);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 400, // Прокручуємо на ширину картки
        behavior: 'smooth', // З анімацією
      });
      setShowScrollBack(true);
    }
  };

  const mobileScreen = isMobile();

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -400, // Прокручуємо назад на ширину картки
        behavior: 'smooth', // З анімацією
      });
    }
  };

  useEffect(() => {
    if (!mobileScreen && containerRef.current) {
      const container = containerRef.current;
      console.log(container);
      container.addEventListener('mouseenter', () => {
        container.classList.add('hovered');
      });
      container.addEventListener('mouseleave', () => {
        container.classList.remove('hovered');
      });

      const handleScroll = () => {
        setShowScrollBack(container.scrollLeft > 0); // Перевіряємо, чи прокручено вправо
      };

      container.addEventListener('scroll', handleScroll);

      return () => {
        container.removeEventListener('mouseenter', () => {
          container.classList.add('hovered');
        });
        container.removeEventListener('mouseleave', () => {
          container.classList.remove('hovered');
        });
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [mobileScreen]);

  useEffect(() => {
   if (!videos.length) {
     const fetchVideos = async () => {
       try {
         const response = await fetch(
           `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANEL_ID}&key=${YOU_TUBE_APIKEY}`
         );
         const { items } = await response.json();
         localStorage.setItem('videos', JSON.stringify(items));
        //  Локал сторейдж для того, щоб зайвий раз не посилати запит до ютюб
         setVideos(items);
       } catch (error) {
         console.error('Error fetching videos:', error.message);
       }
     };

     fetchVideos();
   }
  }, [videos.length]);

  return (
    <section className={s.section}>
      {mobileScreen ? (
        <h2 className={s.title}>
          <span className={s.styledTitle}>ВИДЕОУРОКИ</span> <br /> по ремонту
          тента
        </h2>
      ) : (
        <h2 className={s.title}>
          <span className={s.styledTitle}>ВИДЕОУРОКИ</span> по ремонту тента
        </h2>
      )}
      {mobileScreen && (
        <NavLink to={'/video-tips'} className={s.link}>
          <img src={arrowRight} alt="link to videotutorials" />
        </NavLink>
      )}
      <>
        {mobileScreen && (
          <ul className={s.videoList}>
            {videos?.slice(1).map((el, idx) => (
              <li key={idx} className={s.videoItem}>
                <Video el={el} />
              </li>
            ))}
          </ul>
        )}
        {!mobileScreen && (
          <div style={{ position: 'relative' }}>
            <div className={s.container} ref={containerRef}>
              <div className={s.cards}>
                {videos?.slice(1).map((el, idx) => (
                  <Video key={idx} el={el} />
                ))}
              </div>

              {showScrollBack && (
                <button className={s.scrollButtonLeft} onClick={scrollLeft}>
                  <img
                    className={s.arrowLeft}
                    src={arrowRight}
                    width={50}
                    height={40}
                    alt="arrow to left scroll"
                  />
                </button>
              )}

              <button className={s.scrollButtonRight} onClick={scrollRight}>
                <img
                  src={arrowRight}
                  width={50}
                  height={40}
                  alt="arrow to right scroll"
                />
              </button>
            </div>
          </div>
        )}{' '}
      </>
      {/* {videos?.length ? (
        <>
          {mobileScreen && (
            <ul className={s.videoList}>
              {videos?.slice(1).map((el, idx) => (
                <li key={idx} className={s.videoItem}>
                  <Video el={el} />
                </li>
              ))}
            </ul>
          )}
          {!mobileScreen && (
            <div style={{ position: 'relative' }}>
              <div className={s.container} ref={containerRef}>
                <div className={s.cards}>
                  {videos?.slice(1).map((el, idx) => (
                    <Video key={idx} el={el} />
                  ))}
                </div>

                {showScrollBack && (
                  <button className={s.scrollButtonLeft} onClick={scrollLeft}>
                    <img
                      className={s.arrowLeft}
                      src={arrowRight}
                      width={50}
                      height={40}
                      alt="arrow to left scroll"
                    />
                  </button>
                )}

                <button className={s.scrollButtonRight} onClick={scrollRight}>
                  <img
                    src={arrowRight}
                    width={50}
                    height={40}
                    alt="arrow to right scroll"
                  />
                </button>
              </div>
            </div>
          )}{' '}
        </>
      ) : (
        <div>
          <h3>
            Извините, сейчас сервер недостуный, перейдите на наш канал{' '}
            <a href="https://www.youtube.com/channel/UCCHbfPlV3EVmlViN-2UTPcg">
              YouTube
            </a>
          </h3>
          <p>{error && error}</p>
        </div>
      )} */}
    </section>
  );
};

export default VideoTutorials;

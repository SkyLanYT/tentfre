import React from 'react';
import s from './HeroComponent.module.css';
import telLogo from '../../images/Mask group.png'
import { useMediaQuery } from 'react-responsive';
import smallImg from '../../images/heroImageSmall.jpg';
import smallImg_2 from '../../images/heroImageSmall_2.jpg';
import smallImg_3 from '../../images/heroImageSmall_3.jpg';

const HeroComponent = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  
  return isMobile ? <div className={s.imageWrapper}>
    {isMobile ? (
      <div className={s.heroText}>
        <p className={s.subTitle}>на полуприцепы, прицепы, фуры</p>
        <h2 className={s.heroTitle}>
          <span className={s.tentRepair}>Ремонт ТЕНТА </span> <br />
          Днепр
        </h2>
      </div>
    ) : (
      <div className={s.heroTextDesktop}>
        <p className={s.subTitleDesktop}>
          Ремонтируем тенты фур, прицепов, полуприцепов и зерновозов
        </p>
        <h2 className={s.heroTitleDesktop}>
          Ремонт
          <span className={s.tentRepairDesktop}> тентов </span> <br />в Днепре
        </h2>
      </div>
    )}

    <a className={s.phoneLink} href="tel:+380501589860">
      <img src={telLogo} alt="" />
      +380501589860
    </a>
  </div> : (
    <div
      style={{ display: 'flex', gap: '10px', width: '90%', margin: '0 auto' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <img src={smallImg} width={252} height={160} alt="tent repair" />
        <img src={smallImg_2} width={252} height={160} alt="tent repair" />
        <img src={smallImg_3} width={252} height={160} alt="tent repair" />
      </div>
      <div className={s.imageWrapper} style={{ width: '100%' }}>
        {isMobile ? (
          <div className={s.heroText}>
            <p className={s.subTitle}>на полуприцепы, прицепы, фуры</p>
            <h2 className={s.heroTitle}>
              <span className={s.tentRepair}>Ремонт ТЕНТА </span> <br />
              Днепр
            </h2>
          </div>
        ) : (
          <div className={s.heroTextDesktop}>
            <p className={s.subTitleDesktop}>
              Ремонтируем тенты фур, прицепов, полуприцепов и зерновозов
            </p>
            <h2 className={s.heroTitleDesktop}>
              Ремонт
              <span className={s.tentRepairDesktop}> тентов </span> <br />в
              Днепре
            </h2>
          </div>
        )}

        <a className={s.phoneLink} href="tel:+380501589860">
          <img src={telLogo} alt="" />
          +380501589860
        </a>
      </div>
    </div>
  );
};

export default HeroComponent;

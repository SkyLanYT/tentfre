import React from 'react'
import s from './FindUs.module.css'
import { useTranslation } from 'react-i18next';
import locationImg from '../../images/point.png'
import phoneLogo from '../../images/Phonetel.png'
import { isMobile } from 'constants/useMediaQueries';

const FindUs = () => {
  const mobileScreeen = isMobile();

  const { t } = useTranslation()
  
  const handleClick = () => {
    const latitude = 48.46604243363284;
    const longitude = 35.04520575868492;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

    window.open(url, '_blank');
  };


  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>
        {t('Find us')}: {mobileScreeen&& <br />} <span>{t('Location')}</span>
      </h2>
      <iframe
        className={s.googlemap}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d165.34407772053422!2d35.045052682245114!3d48.466021690191134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe2e7bfeb39b5%3A0x9860a9b2edf4df14!2z0LLRg9C70LjRhtGPINCm0LXQvdGC0YDQsNC70YzQvdCwLCA3Niwg0JTQvdGW0L_RgNC-LCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDRl9C90LAsIDQ5MDAw!5e0!3m2!1suk!2sde!4v1713283938788!5m2!1suk!2sde"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        title="tent repair"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <p className={s.subTitle}>{t('Call us')}</p>
      <div className={s.contactUsWrapper}>
        <button className={s.routeButton} type="button" onClick={handleClick}>
          <img
            src={locationImg}
            width={20}
            height={18}
            alt="google map pointer"
          />
          {t('Route')}
        </button>
        <a className={s.telBtn} href="tel:+380501589860">
          <img src={phoneLogo} width={20} height={23} alt="phone logo" />
          {t('Call')}
        </a>
      </div>
    </section>
  );
}

export default FindUs
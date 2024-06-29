import React from 'react'
import facebook from '../../images/facebook.png';
import viber from '../../images/viber.png';
import telegram from '../../images/telegram-48.png';
import instagramLogo from '../../images/instagramLogo.png'
import s from '../footer/Footer.module.css'
import { openSocialMedia } from 'helpers/socialNet';

const SocialNetwork = () => {
  

  return (
    <div className={s.socialLinks}>
      <button
        className={s.socialBtn}
        onClick={() => openSocialMedia('instagram', '5kanal.ua')}
      >
        <img
          src={instagramLogo}
          width={40}
          height={40}
          alt="logo of instagram"
        />
      </button>
      <button
        className={s.socialBtn}
        onClick={() => openSocialMedia('viber', '+380666772274')}
      >
        <img src={viber} width={40} height={40} alt="logo of viber" />
      </button>

      <button
        className={s.socialBtn}
        onClick={() => openSocialMedia('telegram', 'struzhaks')}
      >
        <img src={telegram} width={40} height={40} alt="logo of telegram" />
      </button>

      <button
        className={s.socialBtn}
        onClick={() => openSocialMedia('facebook', '5kanal')}
      >
        <img src={facebook} width={40} height={40} alt="logo of facebook" />
      </button>
    </div>
  );
}

export default SocialNetwork
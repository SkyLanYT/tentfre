import React, { useState } from 'react';
import s from './LanguagesButton.module.css';
import i18n from '../../i18n';
import ruFlag from '../../images/Russian Federation.png'
import uaFlag from '../../images/Ukraine.png';
import esFlag from '../../images/Spain.png';
import deFlag from '../../images/Germany.png';

const LanguagesButtons = () => {
  const [selectedButton, setSelectedButton] = useState(1);

  const handleButtonClick = buttonId => {
    setSelectedButton(buttonId);
  };

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={s.linkBox}>
      <button
        onClick={() => {
          changeLanguage('ua');
          handleButtonClick(2);
        }}
        className={`${s.toggleButton} ${
          selectedButton === 2 ? `${s.selected}` : ''
        }`}
      >
        <img src={uaFlag} alt="" width={30} height={30} />
        UA
      </button>
      <button
        onClick={() => {
          changeLanguage('ru');
          handleButtonClick(1);
        }}
        className={`${s.toggleButton} ${
          selectedButton === 1 ? `${s.selected}` : ''
        }`}
      >
        <img src={ruFlag} alt="" width={30} height={30} />
        RU
      </button>
      <button
        onClick={() => {
          changeLanguage('ua');
          handleButtonClick(3);
        }}
        className={`${s.toggleButton} ${
          selectedButton === 3 ? `${s.selected}` : ''
        }`}
      >
        <img src={esFlag} alt="" width={30} height={30} />
        ES
      </button>
      <button
        onClick={() => {
          changeLanguage('ua');
          handleButtonClick(4);
        }}
        className={`${s.toggleButton} ${
          selectedButton === 4 ? `${s.selected}` : ''
        }`}
      >
        <img src={deFlag} alt="" width={30} height={30} />
        DE
      </button>
    </div>
  );
};

export default LanguagesButtons;

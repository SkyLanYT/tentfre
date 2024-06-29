import React, { useState } from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-tent.svg';
import burgerMenu from '../../images/burger-menu.svg';
import ScrollToTopButton from 'components/scrollToTopButton/ScrollToTopButton';
import { useTranslation } from 'react-i18next';
import phoneLogo from '../../images/Phonefooter.png';
import i18n from 'i18n';
import ua from '../../images/Ukraine.png';
import es from '../../images/es-flag.svg';
import de from '../../images/de-flag.svg';
import ru from '../../images/Russian Federation.png';
import Navigation from 'components/navigate/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../redux/authSlice/loginSlice';

const Header = ({ toggleBurgerMenu, isOpen }) => {
  const { t } = useTranslation();
  const isAccessToken = useSelector(state => !!state.auth.email);

  const [selectedLanguage, setSelectedLanguage] = useState('ru');

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (window.confirm(t('leave'))) {
      dispatch(logoutUser());
    }
  };

  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    setSelectedLanguage(selectedValue);
    changeLanguage(selectedValue);
  };

  return (
    <header className={s.headerContainer}>
      <NavLink className={s.tentLink} to={'/'}>
        <img
          src={logo}
          className={s.headerLogo}
          width={184}
          height={50}
          alt="logo repair tent"
        />
      </NavLink>
      <div className={s.headerNavigate}>
        <Navigation t={t} />
        <div className={s.languageWrapper}>
          <img
            src={
              selectedLanguage === 'ua'
                ? ua
                : selectedLanguage === 'ru'
                ? ru
                : selectedLanguage === 'es'
                ? es
                : de
            }
            alt="flag ua"
            width={26}
            height={24}
          />
          <select
            value={selectedLanguage}
            onChange={handleSelectChange}
            className={s.languagesSelect}
          >
            <option value="" defaultValue={''}>
              {selectedLanguage === 'ua'
                ? 'Мова'
                : selectedLanguage === 'ru'
                ? 'Язык'
                : 'Language'}
            </option>
            <option value="ru">RU</option>
            <option value="ua"> UA</option>
            <option value="es"> ES</option>
            <option value="de"> DE </option>
          </select>{' '}
        </div>
        <a href="tel:+380501589860" className={s.telHeader}>
          <img src={phoneLogo} width={24} height={24} alt="phonetel logo" />
          +380501589860
        </a>
        {isAccessToken && (
          <button className={s.exitBtn} type="button" onClick={handleSubmit}>
            {t('exit')}
          </button>
        )}
      </div>
      <ScrollToTopButton />

      
        <button
          type="button"
          className={isOpen ? s.hiddenMenuBtn : s.menuBtn}
          onClick={toggleBurgerMenu}
        >
          <img src={burgerMenu} alt="logo burger menu" />
        </button>
    
    </header>
  );
};

export default Header;

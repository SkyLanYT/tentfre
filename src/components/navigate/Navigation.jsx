import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import s from '../header/Header.module.css';
import css from '../footer/Footer.module.css';

const Navigation = ({ t, footer, toggleBurgerMenu }) => {
  const location = useLocation();

  const isActive = path => {
    return location.pathname === path;
  };

  const handleNavLinkClick = () => {
    if (footer) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${footer ? css.navigate : s.navigate}`}>
      <NavLink
        onClick={() => {
          toggleBurgerMenu && toggleBurgerMenu();
          handleNavLinkClick();
        }}
        to={'/'}
        className={isActive('/') ? s.active : ''}
      >
        {t('Homepage')}
      </NavLink>
      <NavLink
        onClick={() => {
          toggleBurgerMenu && toggleBurgerMenu();
          handleNavLinkClick();
        }}
        to={'/promotions'}
        className={isActive('/promotions') ? s.active : ''}
      >
        {t('Promotions')}
      </NavLink>
      <NavLink
        onClick={() => {
          toggleBurgerMenu && toggleBurgerMenu();
          handleNavLinkClick();
        }}
        to={'/video-tips'}
        className={isActive('/video-tips') ? s.active : ''}
      >
        {t('Video tips')}
      </NavLink>
      <NavLink
        onClick={() => {
          toggleBurgerMenu && toggleBurgerMenu();
          handleNavLinkClick();
        }}
        to={'/used-tents'}
        className={isActive('/used-tents') ? s.active : ''}
      >
        {t('Used tents')}
      </NavLink>
      <NavLink
        onClick={() => {
          toggleBurgerMenu && toggleBurgerMenu();
          handleNavLinkClick();
        }}
        to={'/contacts'}
        className={isActive('/contacts') ? s.active : ''}
      >
        {t('Сontacts')}
      </NavLink>
    </nav>
  );
};

export default Navigation;

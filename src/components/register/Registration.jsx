import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import s from './Registration.module.css';
import { NavLink } from 'react-router-dom';

const Registration = () => {
  const { t } = useTranslation();
  const [loginForm, setLoginForm] = useState({
    email: '',
    phone: '',
    userName: '',
    password: '',
    repitPass: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginForm(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Дані відправлено', loginForm);
  };

  return (
    <section className={s.section}>
      <h2 className={s.title}>{t('Register')} </h2>
      <form className={s.loginForm} onSubmit={handleSubmit}>
        <label htmlFor="email">
          {t('inputEmail')}
          <input
            className={s.loginInput}
            type="email"
            onChange={handleChange}
            name="email"
            value={loginForm.email}
            required
            placeholder={'example@mail.com'}
          />
        </label>
        <label htmlFor="phone">
          Номер телефона
          <input
            className={s.franchiseInput}
            type="tel"
            name="phone"
            pattern="^\d{3}\d{3}\d{2}\d{2}$"
            onChange={handleChange}
            value={loginForm.phone}
            required
            placeholder={'0501589860'}
          />
        </label>
        <label htmlFor="name">
          {t('Name')}
          <input
            className={s.franchiseInput}
            type="text"
            onChange={handleChange}
            name="userName"
            value={loginForm.userName}
            required
            placeholder={t('inputName')}
          />
        </label>
        <label htmlFor="password">
          {t('inputPass')}
          <input
            className={s.franchiseInput}
            type="password"
            name="password"
            onChange={handleChange}
            value={loginForm.password}
            required
            placeholder={'пароль'}
          />
        </label>
        <label htmlFor="repitPass">
          {t('repitPass')}
          <input
            className={s.franchiseInput}
            type="password"
            name="repitPass"
            onChange={handleChange}
            value={loginForm.repitPass}
            required
            placeholder={'пароль'}
          />
        </label>

        <div className={s.loginBtnWrapper}>
          <button type="submit" className={s.loginButton}>
            {t('Register')}
          </button>
          <NavLink to="/login" className={s.registerButton}>
            {t('Enter')}
          </NavLink>
        </div>
      </form>
    </section>
  );
};

export default Registration;

import React, { useState } from 'react'
import s from './Login.module.css'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/authSlice/loginSlice';

const Login = () => {
  const { t } = useTranslation();
  const [loginForm, setLoginForm] = useState({
      email: '',
      password: ''
  });

  const dispatch = useDispatch()

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginForm(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(loginForm))
    console.log('Дані відправлено', loginForm);

  };



  return (
    <section className={s.section}>
      <h2 className={s.title}>{t('Login')} </h2>
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
            placeholder={'0501589860'}
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

        <div className={s.loginBtnWrapper}>
          <button type="submit" className={s.loginButton}>
            {t('Enter')}
          </button>
          <NavLink to="/registration" className={s.registerButton}>
            {t('Register')}
          </NavLink>
        </div>
      </form>
    </section>
  );
};

export default Login
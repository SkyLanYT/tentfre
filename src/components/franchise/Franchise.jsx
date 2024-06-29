import React, { useState } from 'react';
import s from './Franchise.module.css';
import { useTranslation } from 'react-i18next';

const Franchise = () => {
  const { t } = useTranslation();
  const [franchiseForm, setFranchiseForm] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFranchiseForm(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Дані відправлено', franchiseForm);
  };

  return (
    <section className={s.section}>
      <h2 className={s.title}>
        ФРАНШИЗА: <span>работайте с нами</span>
      </h2>
      <p>
        Отправьте свою заявку на получения права получать заказы от нашего
        сервиса
      </p>
      <form className={s.franchiseForm} onSubmit={handleSubmit}>
        <label htmlFor="name">
          {t('Name')}
          <input
            className={s.franchiseInput}
            type="text"
            onChange={handleChange}
            name="name"
            value={franchiseForm.name}
            required
            placeholder={t('inputName')}
          />
        </label>
        <label htmlFor="phone">
          Номер
          <input
            className={s.franchiseInput}
            type="tel"
            name="phone"
            pattern="^\d{3}\d{3}\d{2}\d{2}$"
            onChange={handleChange}
            value={franchiseForm.phone}
            required
            placeholder={'0501589860'}
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            className={s.franchiseInput}
            type="email"
            onChange={handleChange}
            name="email"
            value={franchiseForm.email}
            required
            placeholder={t('inputEmail')}
          />
        </label>
        <button type="submit">{t('Send')}</button>
      </form>
    </section>
  );
};

export default Franchise;

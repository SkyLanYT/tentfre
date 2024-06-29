import React, { useState } from 'react';
import s from './Promotions.module.css';
import latka from '../../images/Latka.png';
import { useTranslation } from 'react-i18next';

const Promotion = () => {
  const { t } = useTranslation();
  const [clientInfo, setUserInfo] = useState({ name: '', phone: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setUserInfo(prev => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Дані відправлено', clientInfo);
    setUserInfo({ name: '', phone: '' });
  };

  return (
    <div className={s.promotionsPage}>
      <h2 className={s.title}>
        {t('Promotion')} <span>ЛАТКА ЛЮКС</span>
      </h2>
      <div className={s.promotionInfo}>
        <div className={s.imageWrapper}>
          <img className={s.promotionImage} src={latka} alt="promotion" />
        </div>
        <div className={s.descriptionWrapper}>
          <h3>{t('description promotion')}</h3>
          <p className={s.description}>
            Устраните 5-метровый порыв на тенте по цене 3 м! Выбирайте любой
            цвет латки из 10 вариантов. Забронируйте заказ прямо сейчас!
          </p>
          <h3>{t('Details of promotion')}</h3>
          <p className={s.description}>
            Благодаря этой акции вы можете полностью восстановить целостность и
            надежность тента полуприцепа. Мы устраняем порывы на всех видов
            тентов с помощью фена Leister TRIAC. Использование ткани плотностью
            650 г/м² обеспечит безопасность вашего груза и убережёт его он
            намокания.  Сэкономьте на ремонте тента вместе с нами!
          </p>
          <div className={s.promotionWrapper}>
            <p className={s.price}>
              {t('Cost')} <span>777 грн</span>
            </p>
            <p className={s.promotion}>
              {t('Your savings')} до <span>40%</span>
            </p>
          </div>
        </div>
      </div>
      <form className={s.promotionForm} onSubmit={handleSubmit}>
        <p>{t('order a product')}</p>
        <input
          onChange={handleChange}
          value={clientInfo.name}
          type="text"
          name="name"
          placeholder={t('inputName')}
        />
        <input
          onChange={handleChange}
          value={clientInfo.phone}
          type="tel"
          name="phone"
          placeholder={t('inputPhone')}
        />
        <button>{t('Order')}</button>
      </form>
    </div>
  );
};

export default Promotion;

import React, { useState } from 'react';
import s from './Lots.module.css';
import { useTranslation } from 'react-i18next';
import SearchTents from 'components/searchTents/SearchTents';
import { NavLink } from 'react-router-dom';
import PaginatedCategories from 'components/paginatedCategories/PaginatedCategories';
import { searchCategory } from 'constants/searchCategory';
import UsedTents from 'components/usedTents/UsedTents';
import { usedTents } from 'constants/usedTents';
import { useIsMobile } from 'constants/useMediaQueries';

const Lots = () => {
  const { t } = useTranslation();
  const mobileScreen = useIsMobile();
  const [tents, setTents] = useState(usedTents);

  const handleSubmit = (search) => {
    const visibleTents = usedTents.filter(el => el.title.toLowerCase().includes(search.toLowerCase()));
    setTents(visibleTents);
  };

  return (
    <section className={s.section}>
      <h2 className={s.title}>
        {t('Used tents')}: <br />
        <span className={s.styledTitle}>{t('Lots')}</span>
      </h2>
      <SearchTents t={t} handleSubmit={handleSubmit} />
      {mobileScreen &&
        <div className={s.categoryTitle}>
          <h3 className={s.subtitle}>{t('Category')}</h3>
          <NavLink className={s.usedTentsLink} to={'/used-tents'}>
            {t('See all')}
          </NavLink>
        </div>
      }
      <div style={{ position: 'relative', marginBottom: '30px' }}>
        <PaginatedCategories category={searchCategory} />
      </div>
      <UsedTents usedTents={tents} />
    </section>
  );
};

export default Lots;

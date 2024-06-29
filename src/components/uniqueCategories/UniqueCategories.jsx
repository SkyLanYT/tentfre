import React from 'react';
import s from './UniqueCategories.module.css';
import { uniqueCategories } from 'constants/uniqueCategories';
import PaginatedCategories from 'components/paginatedCategories/PaginatedCategories';
import { isMobile } from 'constants/useMediaQueries';

const UniqueCategories = () => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>
        УНИКАЛЬНЫЕ ПРЕДЛОЖЕНИЯ <br />
        {isMobile() ? (
          <span className={s.styledTitle}> для вас</span>
        ) : (
          <span className={s.styledTitle}> только для вас</span>
        )}
      </h2>
      <PaginatedCategories category={uniqueCategories} />
    </section>
  );
};

export default UniqueCategories;

import React, { useRef, useState } from 'react';
import s from './UniqueOffers.module.css';
import { uniqueOffers } from 'constants/uniqueOffers';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'constants/useMediaQueries';
import PaginatedUniqueOffers from 'components/paginatedUniqueOffers/PaginatedUniqueOffers';
import ListOfUniqOffers from 'components/listOfUniqOffers/ListOfUniqOffers';

const UniqueOffers = () => {
  const { t } = useTranslation();
  const isMobileScreen = isMobile();
  const sectionRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSectionFocus = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <section className={s.section} ref={sectionRef}>
      {isMobileScreen ? (
        <ListOfUniqOffers
          currentItems={uniqueOffers}
          t={t}
          isMobileScreen={isMobileScreen}
          sectionRef={sectionRef}
        />
      ) : (
        <>
          <PaginatedUniqueOffers
            itemsPerPage={4}
            items={uniqueOffers}
            Items={ListOfUniqOffers}
            handleSectionFocus={handleSectionFocus}
          />
          <div className={s.pagination}>
            <span className={s.arrow} onClick={handlePrevPage}>
              ← {currentPage > 1 ? currentPage - 1 : currentPage}
            </span>
            <span className={s.pageNumber}>{currentPage}</span>
            <span className={s.arrow} onClick={handleNextPage}>
              {currentPage + 1} →
            </span>
          </div>
        </>
      )}
    </section>
  );
}

export default UniqueOffers;

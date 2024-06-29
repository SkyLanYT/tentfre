import { isMobile } from 'constants/useMediaQueries';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import s from '../uniqueOffers/UniqueOffers.module.css';
import { useTranslation } from 'react-i18next';

const PaginatedUniqueOffers = ({
  itemsPerPage,
  items,
  Items,
  handleClick,
  handleSectionFocus,
  sectionRef,
}) => {
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const { t } = useTranslation();
  const isMobileScreen = isMobile();
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    handleSectionFocus();
  };

  return (
    <>
      <Items
        currentItems={currentItems}
        t={t}
        isMobileScreen={isMobileScreen}
        handleClick={handleClick}
        sectionRef={sectionRef}
      />
      <div style={{ position: 'relative' }}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="&rarr;"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=" &larr;"
          renderOnZeroPageCount={null}
          containerClassName={s.paginationContainer}
          pageClassName={s.pageClassName}
          activeClassName={s.activePage}
        />
      </div>
    </>
  );
};

export default PaginatedUniqueOffers;

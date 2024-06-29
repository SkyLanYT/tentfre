import React from 'react'
import s from './HowWeWork.module.css'
import Card from 'components/howWeWorkCard/HowWeWorkCard';
import {firstStep, secondStep, thirdStep} from '../../constants/textOfRepair';
import { isMobile } from 'constants/useMediaQueries';

const HowWeWork = () => {

  return (
    <section className={s.section}>
      <h2 className={s.sectionTitle}>
        <span className={s.styledTitle}>РЕМОНТ ТЕНТА:</span>
        {isMobile()&& <br />} как мы работаем
      </h2>
      <div className={s.aboutWorkWrapper}>
        <Card data={firstStep} />
        <Card data={secondStep} />
        <Card data={thirdStep} />
      </div>
    </section>
  );
}

export default HowWeWork
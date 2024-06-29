import FindUs from 'components/findUs/FindUs';
import Franchise from 'components/franchise/Franchise';
import HeroComponent from 'components/heroComponent/HeroComponent';
import HowWeWork from 'components/howWeWork/HowWeWork';
import Lots from 'components/lots/Lots';
import UniqueCategories from 'components/uniqueCategories/UniqueCategories';
import UniqueOffers from 'components/uniqueOffers/UniqueOffers';
import VideoTutorials from 'components/videoTutorials/VideoTutorials';
import { isMobile } from 'constants/useMediaQueries';
import React from 'react';

const HomePage = () => {
  const mobileScreen = isMobile();
  return (
    <>
      <HeroComponent />
      <HowWeWork />
      <UniqueCategories />
      <UniqueOffers />
      <VideoTutorials />
      <Lots />
      <FindUs />
      {!mobileScreen && <Franchise />}
    </>
  );
};

export default HomePage;

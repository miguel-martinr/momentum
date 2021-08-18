import React, { Fragment } from 'react';
import { HomeHeader } from './HomeHeader';

export interface HomeProps {
  title: string,
}




export const Home = (props: HomeProps) => {

  const headerTabs = [
    {
      text: "Home",
      url: "./",
    },
    {
      text: "About",
      url: "./about"
    }
  ];

  return (
      <HomeHeader 
        title="Momentum"
        tabs={headerTabs}
      />
     )
}

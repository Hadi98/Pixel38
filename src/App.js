import React from 'react';
import Header from './components/Header';
import GameCard from './components/Stardew Valley/GameCard';
import ExpandableText from './components/ExpandableText';
import TwoColumnComponent from './components/TwoColumnComponent'; 
import CustomTable from './components/CustomTable';
import Online from './components/Online';
import Box from './components/Box';
import ThreeParagraphs from './components/ThreeParagraphs';
import Socialmedia from './components/Socialmedia';
import ColumnWithLinks from './components/ColumnWithLinks';
import ImageOnRight from './components/ImageOnRight';
import Footer from './components/Footer';
import ScrollComponent from './components/ScrollComponent';
import { Helmet } from 'react-helmet';
import  BottomBar from './components/BottomBar';


const App = () => {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Header/>
      <div className="xl:bg-customBlue mt-[-2rem]"><GameCard/></div>
      <ScrollComponent/>
      <ExpandableText/>
      <TwoColumnComponent/>
      <CustomTable/>
      <Online/>
      <Box/>
      <ThreeParagraphs/>
      <Socialmedia/>
      <ColumnWithLinks/>
      <ImageOnRight/>
      <Footer/>
      < BottomBar/>
    </div>
  );
};

export default App;

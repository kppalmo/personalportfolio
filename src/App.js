import React from 'react';
import { AboutSection } from './Pages/AboutSection';
import { BlogBanner } from './Pages/BlogBanner';
import { FeaturedWork } from './Pages/FeaturedWork';
import { Navigation } from './utils/Navigation';


class App extends React.Component{
  render(){
    return(
      <>
      <Navigation/>
      <AboutSection/>
      <BlogBanner/>
      <FeaturedWork/>
      </>
      
    )
  }
}

export default App;

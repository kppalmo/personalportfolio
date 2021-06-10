import React from 'react';
import { AboutSection } from './Pages/AboutSection';
import { BlogBanner } from './Pages/BlogBanner';
import { Navigation } from './utils/Navigation';


class App extends React.Component{
  render(){
    return(
      <>
      <Navigation/>
      <AboutSection/>
      <BlogBanner/>
      </>
      
    )
  }
}

export default App;

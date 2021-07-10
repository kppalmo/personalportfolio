import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MAINPAGE from './Pages/MAINPAGE';
import ESent from './Pages/ESent';
import { BrowserRouter , Route, Switch } from 'react-router-dom';

class App extends React.Component{
  render(){
    return(
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={MAINPAGE} />
            <Route exact path="/esent" component={ESent} />
          </Switch>
        </BrowserRouter>
      </>
    )
  }
}

export default App;

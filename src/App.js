import React from 'react';
import GlobalStyle from './styles/global'
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Pages/Home'
import SignIn from './Pages/SignIn'



const App = () => {
 return (
   <>
   <Router>
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>

    </Switch>
   </Router>

    <GlobalStyle />
   </>
 )
}

export default App;

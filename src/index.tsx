import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home,Contact,AboutMe,Phonebook } from "./components";

// import {FirebaseAppProvider,AuthCheck} from 'reactfire'
// import {FirebaseConfig} from './firebaseConfig';
// import 'firebase/auth';
// import {Provider} from 'react-redux';
// import {store} from './redux/store';


let myTitle = "Andy's Phone Book";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
      
        <Route exact path="/">
          <Home title={myTitle} />
        </Route>
        <Route path='/phonebook'>
          <Phonebook></Phonebook>
        </Route>

        <Route path='/contact'>
          <Contact></Contact>
          </Route>

          <Route path='/AboutMe'>
          
          </Route>



        
      </Switch>
    </Router>
  </React.StrictMode>
);


import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from "./components/containers/Header/Header";
import Home from "./components/Pages/Home/Home";
import Category from "./components/Pages/Category";

function App() {
return (
  <div className="App">
   <Header />

  

      <Switch>

       <Route path="/" exact>
       <Home />
       </Route>
       
       <Route path="/:category" exact>
       <Category />
       </Route>
    

      </Switch>


  </div>
);
}

export default App;




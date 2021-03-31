import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch, Route, Redirect} from 'react-router-dom';
import Home7 from "./Home7";
import Services7 from "./Services7";
import Contact7 from "./Contact7";
import About7 from "./About7";
import Navbar7 from "./Navbar7";
import Footer7 from "./Footer7";


 const App=()=>{
 return(<>
 <Navbar7/>
 <Switch>
 <Route exact path="/" component={Home7} />
 <Route exact path="/About7" component={About7} />
 <Route exact path="/Services7" component={Services7} />
 <Route exact path="/Contact7" component={Contact7} />
 <Redirect to="/"/>
 </Switch>
 <br/>
 <Footer7/>
 </>)
 }
 export default App;
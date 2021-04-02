import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';


const Navbar7 = () =>{
    return(<>
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
   <NavLink class="navbar-brand" to="/">Navbar</NavLink>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <NavLink activeClassName="menu_active" exact className="nav-link active" aria-current="page" to="/">
          Home
          </NavLink>
        </li>
        <li className="nav-item">
         <NavLink activeClassName="menu_active" exact className="nav-link" to="/About7">
          About
          </NavLink>
        </li>

        <li className="nav-item">
         <NavLink activeClassName="menu_active" exact className="nav-link" to="/Services7">
          Services
          </NavLink>
        </li>

        <li className="nav-item">
         <NavLink activeClassName="menu_active" exact className="nav-link" to="/Contact7">
          Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
    </div>
      </div>
    </>)
}
export default Navbar7;
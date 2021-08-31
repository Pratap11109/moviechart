import React  from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand" to='/'>MovieChart</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="/">Movies <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/customer" >Customers</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/rental">Rentals</Link>
      </li>
     
    </ul>
  </div>
</nav>
  );
};

export default NavBar;

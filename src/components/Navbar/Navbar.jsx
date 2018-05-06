import React, {Component} from 'react'

const Navbar = (props) => (
    <div>
         <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

         <a class="navbar-brand" href="#">Home</a>
         <ul class="navbar-nav">
         <li class="nav-item">
             <a class="nav-link" href="#">Link 1</a>
         </li>
         <li class="nav-item">
             <a class="nav-link" href="#">Link 2</a>
         </li>
         <li class="nav-item dropdown">
             <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Dropdown link
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Holi 1</a>
        <a class="dropdown-item" href="#">Holi 2</a>
        <a class="dropdown-item" href="#">Holi 3</a>
      </div>
    </li>
  </ul>
</nav> 

    </div>
)

export default Navbar
import React,{useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
const Navbar = () => {
   let location =useLocation();
   useEffect(()=> {
    console.log(location);
   },[location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
  <div className="container-fluid">
    <Link className={`navbar-brand ${location.pathname==='/'?'active':""}`} to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/about'?'active':""}`} aria-current="page" to="/about" >About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==='/check'?'active':""}`} to="" >check</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true" />
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar

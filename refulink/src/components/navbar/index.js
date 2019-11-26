import React, {Component} from 'react';
import './index.css';

class Navbar extends Component{

  render() {
    return (
        <nav className="top-navbar">
          <ul>
            <li className="logo"><img src="/images/logo.svg" alt=""/></li>
            <li className="search"><button><img src="/image/jam-search.svg" alt=""/></button><input placeholder="search"/></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Create Listing</a></li>
            <li className="signIn">Sign In/Sign Up</li>
          </ul>
                {/* <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
        </nav>

        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="#">Blog</a>
        //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //         <ul className="navbar-nav">
        //         <li className="nav-item active">
        //             <a className="nav-link" href="#">Blog <span class="sr-only">(current)</span></a>
        //         </li>
        //         <li className="nav-item">
        //             <a className="nav-link" href="#">Create listing</a>
        //         </li>
        //         </ul>
        //     </div>
        // </nav>
    )
  }
}
export default Navbar;
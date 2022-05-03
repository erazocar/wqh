import React from "react";
import {NavLink} from "react-router-dom"

const Nav = () => {
    return(
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" style={{alignSelf: "true"}}>
                <div className="container-fluid ml-2">
                        <ul className="navbar-nav me-auto mb-2" style={{alignItems: "center"}}>
                            <li className="nav-item active" aria-current="page">
                                <NavLink to="/" style={{color: "white", paddingLeft: "20px", textDecoration: "none"}}>
                                    Home
                                    <span className="sr-only" style={{color: "white", paddingLeft: "20px"}}>(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/stations" id="nav-internal">
                                    Stations
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/documentation" id="nav-internal">
                                    Documentation
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/about" id="nav-internal">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex mr-4">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-dark" type="submit">Search</button>
                        </form>
                </div>
            </nav>
    );
};

export default Nav
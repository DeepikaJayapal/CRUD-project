import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <nav class="nav">
            
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/register" className="nav-link">Register</NavLink>
                <NavLink to="/edit" className="nav-link">Employee List</NavLink>
            </nav>
        </div>
    )
}

export default Header;
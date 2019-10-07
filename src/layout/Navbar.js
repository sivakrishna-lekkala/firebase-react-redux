import React from 'react'; 
import { Link } from 'react-router-dom';

// import components
import SigninLinks from './SigninLink';
import SignOutLinks from './SignoutLink';


const NavList = () => {
    return (
        <nav className="nav-wrapper gret  deep-purple lighten-1"> 
            <div className="container">
                <Link to="/" className="brand-logo"> MarioPlan</Link>
                <SigninLinks ></SigninLinks>
                <SignOutLinks></SignOutLinks>
            </div>
        </nav>
        
    )
}

export default NavList;
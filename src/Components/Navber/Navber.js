    import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navber.css'
    
    const Navber = () => {
        return (
            <nav>

           <div className='nav-container'>
             <NavLink className={({isActive}) => isActive ? "active-link" : 'link'} to='/'>Home</NavLink>
             <NavLink  className={({isActive}) => isActive ? "active-link" : 'link'} to='/reviews'>Reviews</NavLink>
             <NavLink  className={({isActive}) => isActive ? "active-link" : 'link'} to='/dashboard'>Dashboard</NavLink>
             <NavLink  className={({isActive}) => isActive ? "active-link" : 'link'} to='/blogs'>Blogs</NavLink>
             <NavLink  className={({isActive}) => isActive ? "active-link" : 'link'} to='/about'>About</NavLink>
           </div>
            </nav>
        );
    };
    
    export default Navber;
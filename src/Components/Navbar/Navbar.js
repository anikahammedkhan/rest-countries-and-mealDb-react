import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 w-4/5 shadow-xl rounded-md mx-auto">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Explorer Hub</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/countries'>Countries</Link></li>
                    <li><Link to='/categories'>Meals</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
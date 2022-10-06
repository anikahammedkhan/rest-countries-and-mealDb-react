import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 w-4/5 mx-auto">
            <div className="flex-1">
                <a href='/' className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/countrys'>Countrys</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
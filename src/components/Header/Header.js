import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (

        <nav className="sticky top-0 z-50 bg-white border-gray-200 px-2  sm:px-4 py-2.5  dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to='/' className=" ">
                    {/* <img src="/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white uppercase">Macworld</span>
                </Link>
                {/* <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button> */}
                <div className="block w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-row overflow-hidden mt-4 md:flex-row md:space-x-8 md:mt-0 text-xs md:text-sm md:font-medium uppercase">
                        <li>
                            {/* <Link to="/" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link> */}
                            <NavLink to='/' className={({ isActive }) => (isActive ? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-500 md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/reviews' className={({ isActive }) => (isActive ? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-500 md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Review</NavLink>
                        </li>
                        <li>
                            <NavLink to='/deshboard' className={({ isActive }) => (isActive ? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-500 md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Deshboard</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blogs' className={({ isActive }) => (isActive ? "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-orange-500 md:p-0 dark:text-white" : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-orange-500 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")}>Blog</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Header;
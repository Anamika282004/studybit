import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const[status,setstatus]=useState("login");

  return (
    <header className="sticky top-0 z-10 block w-full max-w-full px-4  text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href="#"
          class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
          StudyBit <FontAwesomeIcon icon={faLaptop} />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#" className="mr-5 hover:text-gray-900">Community</a>
          <a href="#" className="mr-5 hover:text-gray-900">Courses</a>
          <a href="#" className="mr-5 hover:text-gray-900">Ask Me</a>
          <a href="#" className="mr-5 hover:text-gray-900">Docs</a>
        </nav>
        <div class="flex items-center gap-x-1">
            <button class="px-4 w-20 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button"  onClick={()=>{status==="login"?setstatus("logout"):setstatus("login")}}>
              {status}
            </button>
            <button
              class="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
              type="button">
              <span>Sign in</span>
            </button>
          </div>
      </div>
    </header>
  );
}

export default Navbar;

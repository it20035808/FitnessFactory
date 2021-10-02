import React, {useState} from "react";
import { Link } from 'react-router-dom';

function Header() {

    const [activeStatus, setActiveStatus] = useState(1);
  return (
      <div className={"absolute top-5 min-w-full px-10 "}>
          <div className="sm:hidden relative w-11/12 mx-auto rounded pr-7">
              <div className="absolute inset-0 m-auto mr-4 z-0 w-6 h-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="8 9 12 5 16 9" />
                      <polyline points="16 15 12 19 8 15" />
                  </svg>
              </div>
              <select aria-label="Selected tab" className="form-select block w-full p-3 border border-gray-300 rounded text-gray-600 appearance-none bg-transparent relative z-10">
                  <option className="text-sm text-gray-600">Home </option>
                  <option className="text-sm text-gray-600">Create Supplier </option>
              </select>
          </div>
          <div className="justify-between flex-wrap hidden sm:block">
              <div className="xl:w-full xl:mx-0 rounded bg-gray-200 h-12 shadow">
                  <ul className="flex items-center h-full">
                      <Link
                          to="/"
                          onClick={() => setActiveStatus(1)}
                          className={activeStatus === 1 ? "text-sm text-white flex items-center h-full px-5 bg-indigo-700 py-4 rounded-md mr-10 font-normal no-underline hover:no-underline focus:no-underline"  : "text-sm text-gray-600 h-full flex items-center pt-5 pb-5 mr-10 font-normal hover:text-gray-700 cursor-pointer no-underline hover:no-underline focus:no-underline mx-10"}>
                          {activeStatus === 1 ? "HOME" : "Home"}
                      </Link>
                      <Link
                            to="/add"
                          onClick={() => setActiveStatus(2)}
                            className={activeStatus === 2 ? "text-sm text-white flex items-center h-full px-5 bg-indigo-700 py-4 rounded-md mr-10 font-normal no-underline hover:no-underline focus:no-underline" : "text-sm text-gray-600 h-full flex items-center pt-5 pb-5 mr-10 font-normal hover:text-gray-700 cursor-pointer no-underline hover:no-underline focus:no-underline"}>
                          {activeStatus === 2 ? "CREATE SUPPLIER" : "Create Supplier"}
                      </Link>
                  </ul>
              </div>
          </div>
      </div>
  )
}

export default Header;


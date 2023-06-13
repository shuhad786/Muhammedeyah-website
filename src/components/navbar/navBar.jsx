import React from 'react'
import Logo from '../../assets/logo.jpg'

function navBar() {
  return (
    <div>
      <nav className="border-indigo-950 bg-blue-950">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <img src={Logo} className="h-24 w-24 rounded-2xl ease-out hover:ease-in duration-1000 hover:rounded-lg hover:h-40 hover:w-40 hover:duration-1000" alt="muhammedeyah Logo" />
          <h1 className="text-4xl font-semibold text-yellow-300 text-center">Muhammedeyah <br/> Primary <br/> School</h1>
          <div className="flex flex-col">
              <a href="tel:0217978047" className="mr-6 text-sm text-zinc-200 hover:underline hover:text-yellow-400 hover:text-base duration-1000">Tel: (021) 797 8047</a>
              <a href="#" className="text-sm text-zinc-200 hover:underline hover:text-yellow-400 hover:text-base ease-in ease-out duration-500">Address:<br/> 103 Batts Rd <br/> Wynberg <br/> Cape Town <br/> 7800</a>
          </div>
        </div>
      </nav>
      <nav className="bg-yellow-400">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex items-center">
              <ul className="hidden md:flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                  <li>
                      <a href="#" className="text-blue-950 hover:underline" aria-current="page">Home</a>
                  </li>
                  <li>
                      <a href="#" className="text-blue-950 hover:underline">Upcoming Events</a>
                  </li>
                  <li>
                      <a href="#" className="text-blue-950 hover:underline">Gallery</a>
                  </li>
                  <li>
                      <a href="#" className="text-blue-950 hover:underline">Extracurricular Activities</a>
                  </li>
                  <li>
                      <a href="#" className="text-blue-950 hover:underline" aria-current="page">Staff</a>
                  </li>
                  <li>
                      <a href="#" className="text-blue-950 hover:underline" aria-current="page">About</a>
                  </li>
              </ul>
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-tr duration-1000 from-yellow-400 to-blue-950 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-500 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Enroll here for 2024
                </span>
              </button>
              <div className="md:hidden">
                  <button type="button" className="text-blue-950 hover:text-blue-900 focus:outline-none">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                  </button>
              </div>
          </div>
        </div>
    </div>
</nav>
    </div>
  )
}

export default navBar

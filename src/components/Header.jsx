


import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-500 h-12 flex justify-between items-center px-3 fixed top-0 left-0 right-0 z-50">
      {/* Logo + Name together */}
      <div className="flex items-center space-x-2">
        <img
          className="h-20 w-auto object-contain"
          src="https://nxtrole.in/nxtrole.png"
          alt="Logo"
        />
        <p className="font-bold bg-gradient-to-b from-green-500 via-yellow-500 to-blue-500 text-transparent bg-clip-text text-lg">NxtRole.AI</p>
      </div>

      {/* Navbar Menu */}
      <ul className="m-2 space-x-4 font-semibold md:flex hidden text-black items-center">
        <li>
          <a href="#home" className="cursor-pointer hover:text-blue-900">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="cursor-pointer hover:text-blue-900">
            About
          </a>
        </li>
        <li>
          <a href="#features" className="cursor-pointer hover:text-blue-900">
            Features
          </a>
        </li>
        <li>
          <a href="#contact" className="cursor-pointer hover:text-blue-900">
            Contact
          </a>
        </li>
        <button className="bg-blue-600 text-white rounded px-3 py-1 hover:bg-amber-400 transition">
          Get Started
        </button>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <a className="text-4xl" href="#">
          &#8801;
        </a>
      </div>
    </nav>
  );
};

// Example Page sections below Navbar
const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-12">
        <section
          id="home"
          className="h-screen bg-blue-100 flex justify-center items-center"
        >
          <h1 className="text-3xl font-bold">Home Section</h1>
        </section>

        <section
          id="about"
          className="h-screen bg-green-100 flex justify-center items-center"
        >
          <h1 className="text-3xl font-bold">About Section</h1>
        </section>

        <section
          id="features"
          className="h-screen bg-yellow-100 flex justify-center items-center"
        >
          <h1 className="text-3xl font-bold">Features Section</h1>
        </section>

        <section
          id="contact"
          className="h-screen bg-pink-100 flex justify-center items-center"
        >
          <h1 className="text-3xl font-bold">Contact Section</h1>
        </section>
      </div>
    </>
  );
};

export default App;



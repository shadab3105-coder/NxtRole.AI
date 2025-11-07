import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-2 py-2 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-1">
          <img
            className="h-20 w-auto object-contain"
            src="https://nxtrole.in/nxtrole.png"
            alt="Logo"
          />
          <span className="text-sm">© 2025 NxtRole.AI</span>
        </div>

        <div className="flex items-center gap-4 mt-4 md:mt-0 ">
          <a href="#" aria-label="twitter" className="hover:text-indigo-600">Twitter</a>
          <a href="#" aria-label="linkedin" className="hover:text-indigo-600">LinkedIn</a>
          <a href="#" aria-label="facebook" className="hover:text-indigo-600">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer 
import React, { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import logo from "../assets/logos/logo-black.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const navItems = [
    { name: 'Home', dropdown: false },
    { name: 'Services', dropdown: true },
    { name: 'About Us', dropdown: false },
    { name: 'Projects', dropdown: false },
    { name: 'Products', dropdown: true },
    { name: 'Blog', dropdown: false },
    { name: 'Contact', dropdown: false },
  ];

  const dropdownItems = {
    Services: ['AC Installation', 'Maintenance', 'Repair', 'Energy Audit'],
    Products: ['Residential Units', 'Commercial Units', 'Smart Thermostats', 'Accessories'],
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo - Left Side */}
          <div className="flex-shrink-0">
            <img src={logo} alt="CoolAir Logo" className="h-8" />
          </div>

          {/* Centered Navigation Links - Desktop */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                      >
                        {item.name}
                        <FiChevronDown className={`ml-1 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                          {dropdownItems[item.name].map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href="#"
                      className="text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Now Button - Right Side */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
              Schedule Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex justify-between items-center px-3 py-2 text-gray-700 hover:text-blue-600"
                    >
                      {item.name}
                      <FiChevronDown className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4">
                        {dropdownItems[item.name].map((subItem) => (
                          <a
                            key={subItem}
                            href="#"
                            className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                          >
                            {subItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href="#"
                    className="block px-3 py-2 text-gray-700 hover:text-blue-600"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-2">
              Schedule Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
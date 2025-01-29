import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '/public/images/logo2.jpg';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex justify-between items-center h-16">
            <img src={logo} alt="pleasure Logo" className="h-12 w-12" />
            <span className="text-xl font-bold text-gray-900">
            Ochitech Solutions
            </span>
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-4 pb-3 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

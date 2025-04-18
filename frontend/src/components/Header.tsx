// components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="header fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="logo text-cyan-400 font-mono text-xl font-semibold tracking-wide">
          &lt;Evelyn /&gt;
        </div>

        {/* Desktop Navigation */}
        <nav className="nav hidden md:flex space-x-8 text-sm font-light text-gray-300">
          {["About", "Portfolio", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="nav-link hover:text-white relative after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle md:hidden text-gray-300">
          <button onClick={toggleMobileMenu}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="mobile-menu md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col items-start space-y-4 px-6 py-4 text-sm text-gray-300">
            {["About", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="mobile-nav-link hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

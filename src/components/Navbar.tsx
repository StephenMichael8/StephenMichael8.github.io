
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold">Propel</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/about" className="text-sm font-medium hover:text-accent transition-colors">
            About
          </Link>
          <Link to="/university" className="text-sm font-medium hover:text-accent transition-colors">
            University
          </Link>
          <Link to="/task-force" className="text-sm font-medium hover:text-accent transition-colors">
            Task Force
          </Link>
          <Link to="/research" className="text-sm font-medium hover:text-accent transition-colors">
            Research
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="rounded-full">
            Log In
          </Button>
          <Button size="sm" className="rounded-full bg-accent hover:bg-accent/90">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <div className="flex flex-col space-y-4 p-6">
            <Link
              to="/about"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/university"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              University
            </Link>
            <Link
              to="/task-force"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Task Force
            </Link>
            <Link
              to="/research"
              className="text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Research
            </Link>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="outline" className="w-full justify-center rounded-full">
                Log In
              </Button>
              <Button className="w-full justify-center rounded-full bg-accent hover:bg-accent/90">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

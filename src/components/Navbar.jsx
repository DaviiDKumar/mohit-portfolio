import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" }, // Replaced Skills/Research with Experience
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 cursor-pointer">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          {menuItems.map((item) => (
            <li key={item.id} className="relative group">
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-gray-800 hover:text-blue-600 transition-colors"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setOpen(true)}
        >
          <span className="block h-1 w-6 bg-gray-800 my-1 rounded"></span>
          <span className="block h-1 w-6 bg-gray-800 my-1 rounded"></span>
          <span className="block h-1 w-6 bg-gray-800 my-1 rounded"></span>
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-800 text-3xl font-bold"
          onClick={() => setOpen(false)}
        >
          &times;
        </button>

        <ul className="flex flex-col mt-20 px-6 gap-6 text-lg">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setOpen(false)}
                className="cursor-pointer hover:text-blue-600 transition-colors block py-2"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black opacity-30 z-40" onClick={() => setOpen(false)}></div>
      )}
    </nav>
  );
}
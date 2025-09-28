import React, { useState, useRef, useEffect } from 'react';
import { List, X } from 'lucide-react';

const PRIMARY_COLOR_CLASS = 'text-orange-600';
const HOVER_COLOR_CLASS = 'hover:text-orange-700';
const BUTTON_BG_COLOR = 'bg-orange-600';
const BUTTON_HOVER_BG_COLOR = 'hover:bg-orange-700';
const BORDER_COLOR = 'border-orange-600';

const SideBar = ({ open, setOpen }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (open && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [open, setOpen]);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden" onClick={() => setOpen(false)} />
      )}

      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-screen bg-white shadow-xl p-6 transform transition-transform duration-300 z-40 ${open ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex justify-between items-center mb-10">
          <div className={`text-xl font-bold ${PRIMARY_COLOR_CLASS}`}>IELTS-Ai</div>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden flex items-center p-1 rounded-md hover:bg-gray-100 transition"
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col space-y-2">
          {['Courses', 'Mock Test', 'Speaking Practice', 'Resources'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '')}`}
              className={`text-gray-700 ${HOVER_COLOR_CLASS} text-base py-3 px-2 rounded-lg transition-colors`}
              onClick={handleLinkClick}
            >
              {item}
            </a>
          ))}

          <div className="flex flex-col space-y-3 mt-8 pt-4 border-t border-gray-100">
            <button 
              className={`${BUTTON_BG_COLOR} text-white px-6 py-3 rounded-xl font-semibold shadow-md ${BUTTON_HOVER_BG_COLOR} transition duration-300`}
              onClick={handleLinkClick}
            >
              Sign Up
            </button>
            <button 
              className={`border-2 ${BORDER_COLOR} ${PRIMARY_COLOR_CLASS} px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition duration-300`}
              onClick={handleLinkClick}
            >
              Login
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-full h-20 bg-white shadow-sm flex items-center justify-between px-6 lg:px-10 relative z-50">
      <div className={`text-2xl font-bold ${PRIMARY_COLOR_CLASS}`}>IELTS-Ai</div>

      <div className="space-x-8 md:flex hidden items-center h-full">
        {['Courses', 'Mock Test', 'Speaking Practice', 'Resources'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/\s/g, '')}`}
            className={`relative text-gray-700 ${HOVER_COLOR_CLASS} font-medium group transition-colors duration-200`}
          >
            {item}
            <span className={`absolute left-0 -bottom-1 w-0 h-[3px] ${BUTTON_BG_COLOR} transition-all duration-300 group-hover:w-full`}></span>
          </a>
        ))}
      </div>

      <div className="space-x-4 h-10 md:flex hidden">
        <button 
          className={`border-2 ${BORDER_COLOR} ${PRIMARY_COLOR_CLASS} px-5 py-2 rounded-full font-semibold hover:bg-orange-50 transition duration-300 text-sm`}
        >
          Login
        </button>
        <button 
          className={`${BUTTON_BG_COLOR} text-white px-5 py-2 rounded-full font-semibold shadow-md ${BUTTON_HOVER_BG_COLOR} transition duration-300 text-sm`}
        >
          Sign Up
        </button>
      </div>

      <button
        className="md:hidden flex items-center p-2 text-gray-700 hover:text-gray-900 transition"
        onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
        }}
        aria-label="Toggle Menu"
      >
        {sidebarOpen ? <X size={28} /> : <List size={28} />}
      </button>

      <SideBar open={sidebarOpen} setOpen={setSidebarOpen} />
    </div>
  );
};

export default NavBar;

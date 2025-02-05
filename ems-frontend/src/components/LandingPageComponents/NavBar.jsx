import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({});
  const navRefs = useRef({});

  const menuItems = [
    {
      name: "What We Do",
      id: "what-we-do",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi sagittis metus montes conubia senectus cursus posuere nisl. Mus aliquam imperdiet parturient sodales conubia enim hendrerit molestie. Platea consequat fusce parturient ut arcu est.",
    },
    {
      name: "Solutions",
      id: "solutions",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse maecenas ridiculus vel imperdiet ullamcorper donec. Ridiculus nam integer non odio himenaeos convallis.",
    },
    {
      name: "Partners",
      id: "partners",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec feugiat pulvinar rhoncus eleifend morbi. Felis placerat orci justo primis, neque libero commodo imperdiet fringilla.",
    },
  ];

  useEffect(() => {
    if (hoveredItem) {
      const element = navRefs.current[hoveredItem];
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowWidth = window.innerWidth;
        const shouldAlignRight = rect.right + 300 > windowWidth; // Avoid overflow
        setDropdownPosition((prev) => ({
          ...prev,
          [hoveredItem]: shouldAlignRight
            ? "right-0"
            : "left-1/2 transform -translate-x-1/2",
        }));
      }
    }
  }, [hoveredItem]);

  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-end px-4">
        {/* <div className="text-lg font-bold">Employee Management System</div> */}
        <nav className="flex items-center space-x-6 font-semibold">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative"
              ref={(el) => (navRefs.current[item.id] = el)}
            >
              <a
                href={`#${item.id}`}
                className="transition-colors hover:text-purple-700"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.name}
              </a>
              {hoveredItem === item.id && (
                <div
                  className={`absolute top-full z-50 mt-6 w-64 rounded-lg border bg-white p-4 text-sm shadow-lg ${index === 0 ? "left-0" : index === menuItems.length - 3 ? "right-0" : "left-1/2 -translate-x-1/2 transform"}`}
                >
                  {item.content}
                </div>
              )}
            </div>
          ))}

          <Link
            to="/login"
            className="rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-700"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

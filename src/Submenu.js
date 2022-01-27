import React, { useEffect, useRef } from 'react';

const Submenu = ({ isMenuOpen, location, title, links }) => {
  const submenu = useRef(null);

  useEffect(() => {
    const { center, bottom } = location;
    submenu.current.style.left = `${center}px`;
    submenu.current.style.top = `${bottom}px `;
  }, [location]);
  return (
    <div
      className={` ${isMenuOpen ? 'submenu show' : 'submenu'}`}
      ref={submenu}
    >
      <div className="submenu-wrap">
        <h2>{title}</h2>
        <div className="links-container">
          {links.map((link, i) => {
            return (
              <a href="#" key={i}>
                {link}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Submenu;

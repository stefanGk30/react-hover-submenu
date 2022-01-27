import React from 'react';

const Navbar = ({ openMenu, closeMenu }) => {
  const showMenu = (e) => {
    const tempBtn = e.target.getBoundingClientRect();
    const contentPage = e.target.textContent;
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom;
    openMenu(contentPage, { center, bottom });
  };

  return (
    <nav
      onMouseOver={(e) => {
        if (e.target.classList.contains('nav-btn')) return;
        closeMenu();
      }}
    >
      <div className="section-center navlinks-container">
        <button className="nav-btn" onMouseOver={showMenu}>
          link 1
        </button>
        <button className="nav-btn" onMouseOver={showMenu}>
          link 2
        </button>
        <button className="nav-btn" onMouseOver={showMenu}>
          link 3
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

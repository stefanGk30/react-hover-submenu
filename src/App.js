import { useState } from 'react';

import Navbar from './Navbar';
import Submenu from './Submenu';

const data = [
  { title: 'link 1', links: ['content1', 'content2', 'content3'] },
  { title: 'link 2', links: ['content4', 'content5'] },
  {
    title: 'link 3',
    links: ['content6', 'content7', 'content8', 'content9', 'content10'],
  },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuContent, setSubmenuContent] = useState({
    title: '',
    links: [],
  });
  const [location, setLocation] = useState({});

  const openMenu = (page, position) => {
    const content = data.find((item) => item.title === page);
    setSubmenuContent({ title: content.title, links: content.links });
    setLocation(position);
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Navbar openMenu={openMenu} closeMenu={closeMenu} />
      <section className="hero" onMouseOver={closeMenu}></section>
      <Submenu
        isMenuOpen={isMenuOpen}
        location={location}
        {...submenuContent}
      />
    </>
  );
}

export default App;

import React, { useState, useRef, useEffect } from 'react';
// custom hooks
import { useGlobalContext } from './context';

const Submenue = () => {
  const {
    isSubmenueOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenue = container.current;
    const { center, bottom } = location;
    submenue.style.left = `${center}px`;
    submenue.style.top = `${bottom}px`;

    if(links.length === 3) {
        setColumns('col-3')
    }
    if(links.length > 3) {
        setColumns('col-4')
    }
  }, [location, links]);

  return (
    <aside
      ref={container}
      className={`${isSubmenueOpen ? 'submenu show' : 'submenu'}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenue;

import React, { useState } from "react";
import Link from "next/link";
import navStyles from "../styles/Navbar.module.css";
import Image from 'next/image'
import { useRouter } from "next/dist/client/router";

export const siteLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Radio",
    url: "/radio",
  },
  {
    title: "Music",
    url: "/music",
  },
  {
    title: "Directing",
    url: "/directing",
  },
  {
    title: "Writing",
    url: "/writing",
  },
  {
    title: "Films",
    url: "/films",
  },
  {
    title: "Screenplay",
    url: "/screenplay",
  },
  {
    title: "Autobiography",
    url: "/autobiography",
  },
];

const NavLink = ({ title, url }) => {
  const router = useRouter();

  return (
    <Link passHref href={url}><a className={router.pathname === url ? "active" : ""}>{title}</a></Link>
  )
};

const Nav = () => {
  const [open, setIsOpen] = useState(false);

  return (
    <>
      <div className={navStyles.nav__toggle} onClick={() => setIsOpen(!open)}>
          <span className={`${navStyles.nav__toggle__line} ${open ? navStyles.top__line : ''}`}></span>
          <span className={`${navStyles.nav__toggle__line} ${open ? navStyles.middle__line : ''}`}></span>
          <span className={`${navStyles.nav__toggle__line} ${open ? navStyles.bottom__line : ''}`}></span>
      </div>  
      <nav className={`${navStyles.nav} ${open ? navStyles.open : ''}`}>
      
        <Link passHref href={'/'}>
            <Image 
              src="/hubert-gregg-nav.jpg"
              width="100"
              height="100"
              alt="Hubert Gregg navigation logo - click to go to home page" />
          </Link>    
        <ul>
          {siteLinks.map(link => (
            <li>
              <NavLink title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;

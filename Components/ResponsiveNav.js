import React from "react";
import Link from "next/link";
import navStyles from "../styles/Navbar.module.css";
import Image from 'next/image'
import { useRouter } from "next/dist/client/router";

const Nav = () => {
  const router = useRouter();

  return (
    <nav className={navStyles.nav}>
    
      <Link passHref href={'/'}>
          <Image 
            src="/hubert-gregg-nav.jpg"
            width="100"
            height="100"
            alt="Hubert Gregg navigation logo - click to go to home page" />
        </Link>    
      <ul>
        <li>
          <Link passHref href={"/radio"}><a className={router.pathname === "/radio" ? "active" : ""}>Radio</a></Link>
        </li>
        <li>
          <Link passHref href={"/music"}><a className={router.pathname === "/music" ? "active" : ""}>Music</a></Link>
        </li>
        <li>
          <Link passHref href={"/directing"}><a className={router.pathname === "/directing" ? "active" : ""}>directing</a></Link>
        </li>
        <li>
          <Link passHref href={"/writing"}><a className={router.pathname === "/writing" ? "active" : ""}>Writing</a></Link>
        </li>
        <li>
          <Link passHref href={"/films"}><a className={router.pathname === "/films" ? "active" : ""}>Films</a></Link>
        </li>
        <li>
          <Link passHref href={"/screenplay"}><a className={router.pathname === "/screenplay" ? "active" : ""}>Screenplay</a></Link>
        </li>
        <li>
          <Link passHref href={"/autobiography"}><a className={router.pathname === "/autobiography" ? "active" : ""}>Autobiography</a></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

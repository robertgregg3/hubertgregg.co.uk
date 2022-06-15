import React, { useState } from "react";
import Link from "next/link";
import navStyles from "../styles/Navbar.module.css";
import Image from 'next/image'

const Nav = () => {
  const [ selected, setSelected ] = useState('selected');
  return (
    <nav className={navStyles.nav}>
      <Link href={'/'}>
          <Image 
            src="/hubert-gregg-nav.jpg"
            width="100"
            height="100" />
        </Link>    
      <ul>
        <li>
        </li>
        <li>
          <Link href={"/radio"}>Radio</Link>
        </li>
        <li>
          <Link href={"/movies"}>Movies</Link>
        </li>
        <li>
          <Link href={"/directing"}>directing</Link>
        </li>
        <li>
          <Link href={"/writing"}>Writing</Link>
        </li>
        <li>
          <Link href={"/music"}>Music</Link>
        </li>
        <li>
          <Link href={"/screenplay"}>Screenplay</Link>
        </li>
        <li>
          <Link href={"/autobiography"}>Autobiography</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

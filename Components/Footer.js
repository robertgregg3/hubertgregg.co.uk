import Link from 'next/link';
import React from 'react';
import footerStyles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <div className={footerStyles.footer}>
        <div className={footerStyles.footerContainer}>        
            <div className={footerStyles.footerLeft}>
                <span className={footerStyles.footerTitle}>Info</span>
                <ul>
                    <li>
                        <Link href={"/radio"}>Contact us</Link>
                    </li>
                    <li>
                        <Link href={"/movies"}>Book</Link>
                    </li>
                </ul>
            </div>
            <div className={footerStyles.footerRight}>
                <span className={footerStyles.footerTitle}>Pages</span>
                <ul>
                    <li>
                        <Link href={"/radio"}>Radio</Link>
                    </li>
                    <li>
                        <Link href={"/movies"}>Book</Link>
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
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
import Link from 'next/link';
import React from 'react';
import footerStyles from '../styles/Footer.module.css'
import { useRouter } from "next/dist/client/router";

const Footer = () => {
    const router = useRouter();
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.footerContainer}>        
                <div className={footerStyles.footerLeft}>
                    <span className={footerStyles.footerTitle}>Info</span>
                    <ul>
                        <li>
                            <Link passHref href={"/contact"}><a className={router.pathname === "/contact" ? "footer-active" : ""}>Contact us</a></Link>
                        </li>
                        <li>
                            <Link passHref href={"/autobiography"}><a className={router.pathname === "/autobiography" ? "footer-active" : ""}>Autobiography</a></Link>
                        </li>
                    </ul>
                </div>
                <div className={footerStyles.footerRight}>
                    <span className={footerStyles.footerTitle}>Pages</span>
                    <ul>
                    <li>
                        <Link passHref href={"/radio"}><a className={router.pathname === "/radio" ? "footer-active" : ""}>Radio</a></Link>
                    </li>
                    <li>
                        <Link passHref href={"/music"}><a className={router.pathname === "/music" ? "footer-active" : ""}>Music</a></Link>
                    </li>
                    <li>
                        <Link passHref href={"/directing"}><a className={router.pathname === "/directing" ? "footer-active" : ""}>directing</a></Link>
                    </li>
                    <li>
                        <Link passHref href={"/writing"}><a className={router.pathname === "/writing" ? "footer-active" : ""}>Writing</a></Link>
                    </li>
                    <li>
                        <Link passHref href={"/films"}><a className={router.pathname === "/films" ? "footer-active" : ""}>Films</a></Link>
                    </li>
                    <li>
                        <Link passHref href={"/screenplay"}><a className={router.pathname === "/screenplay" ? "footer-active" : ""}>Screenplay</a></Link>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer

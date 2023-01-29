import Link from 'next/link';
import React from 'react';
import { useRouter } from "next/dist/client/router";
import { siteLinks } from '../data/siteLinks';
import NavLink from './NavLinks';
import footerStyles from '../styles/Footer.module.css';


const Footer = () => {
    const router = useRouter();
    return (
        <div className={footerStyles.footerContainer}>        
            <div className={footerStyles.footerLeft}>
                <span className={footerStyles.footerTitle}>Info</span>
                <ul>
                    <li>
                        <Link passHref href={"/contact"}><a className={router.pathname === "/contact" ? footerStyles.footer__active : ""}>Contact us</a></Link>
                    </li>
                </ul>
            </div>
            <div className={footerStyles.footerRight}>
                <span className={footerStyles.footerTitle}>Pages</span>
                <ul>
                    {siteLinks.map(link => (
                        <li key={link.title}>
                        <NavLink title={link.title} url={link.url}  />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer

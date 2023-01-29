import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import navStyles from "../styles/Navbar.module.css";

const NavLink = ({ title, url }) => {
    const router = useRouter();
  
    return (
      <Link passHref href={url}><a className={router.pathname === url ? navStyles.active : ""}>{title}</a></Link>
    )
};

export default NavLink;


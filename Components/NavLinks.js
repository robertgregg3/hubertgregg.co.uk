import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const NavLink = ({ title, url }) => {
    const router = useRouter();
  
    return (
      <Link passHref href={url}><a className={router.pathname === url ? "active" : ""}>{title}</a></Link>
    )
};

export default NavLink;


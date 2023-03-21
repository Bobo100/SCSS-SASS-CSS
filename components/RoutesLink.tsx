import Link from "next/link";
import { useRouter } from "next/router";

const RoutesLink = () => {
    const router = useRouter();
    return (
        <>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>回到首頁</Link>
            <Link href="/StyleRules" className={router.pathname === "/StyleRules" ? "active" : ""}>樣式規則</Link>
            <Link href="/Hover" className={router.pathname === "/Hover" ? "active" : ""}>Hover</Link>
        </>
    );
};

export default RoutesLink;
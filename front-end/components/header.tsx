import Link from "next/link";


const Header: React.FC = () => {
    return (
        <header>
            <a>
                {" "}
                Bookclubs App
            </a>
            <nav>
                <Link href="/">
                    Home
                </Link>
                <Link href="/bookclubs">
                    Bookclubs
                </Link>
            </nav>
        </header>
    );
};

export default Header;

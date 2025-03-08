import Head from "next/head";
import Image from "next/image";
import Header from "@components/header";
import styles from "@styles/home.module.css";

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>BookMates</title>
                <meta name="description" content="BookMates app" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/../public/images/bookmateslogo.png" />
            </Head>
            <Header></Header>
            <main>
                <span>
                    <Image
                        src="/../public/images/bookmateslogo.png"
                        alt="BookMates Logo"
                        width={50}
                        height={50}
                    />
                    <h1>BookMates</h1>
                </span>

                <div>
                    <p>
                    Welcome to BookMates, the ultimate destination for book lovers looking for reading buddies!
                    Discover vibrant bookclubs where readers from around the world come together to explore, discuss, and celebrate the magic of books. Whether you're into page-turning thrillers, heartfelt romances, or thought-provoking non-fiction, you'll find a space to connect.
                    <br />
                    Browse and join existing groups or - even better - create your own bookclub! Share reviews, engage in lively discussions, and bring some fun along your reading-journey.
                    </p>
                </div>
            </main>
        </>
    );
};

export default Home;

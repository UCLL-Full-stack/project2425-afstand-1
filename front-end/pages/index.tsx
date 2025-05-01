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
            <main className={styles.main}>
                <div className={styles.center}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <h1>Home</h1>
                    </span>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card} style={{ display: 'flex', justifyContent: 'center' }}>
                        <p style={{ 
                            fontSize: '1.1rem', 
                            lineHeight: '1.6',
                            color: '#333',
                            maxWidth: '800px',
                            textAlign: 'center',
                            opacity: '1'
                        }}>
                            Welcome to BookMates, the ultimate destination for book lovers looking for reading buddies!
                            Discover vibrant bookclubs where readers from around the world come together to explore, discuss, and celebrate the magic of books. Whether you're into page-turning thrillers, heartfelt romances, or thought-provoking non-fiction, you'll find a space to connect.
                            <br /><br />
                            Browse and join existing groups or - even better - create your own bookclub! Share reviews, engage in lively discussions, and bring some fun along your reading-journey.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
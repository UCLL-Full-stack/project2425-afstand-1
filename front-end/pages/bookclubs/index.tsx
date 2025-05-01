import BookclubInfo from "@components/bookclubs/BookclubInfo";
import BookclubOverviewTable from "@components/bookclubs/BookclubOverviewTable";
import Header from "@components/header";
import BookclubService from "@services/BookclubService";
import { Bookclub } from "@types";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from '@styles/home.module.css';

const Bookclubs: React.FC = () => {
    const [bookclubs, setBookclubs] = useState<Array<Bookclub>>();
    const [selectBookclub, setSelectedBookclub] = useState<Bookclub>();
    
    const getBookclubs = async () => {
        const response = await BookclubService.getAllBookclubs();
        const bookclubs = await response.json();
        setBookclubs(bookclubs);
    }

    useEffect(() => {
        getBookclubs();
    }, [])

    return (
        <>
            <Head>
                <title>Bookclubs</title>
            </Head>
            <Header />
            <main className={styles.main}>
                <h1>Bookclubs</h1>
                <div className={styles.grid} style={{ gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                    <section className={styles.card} style={{ background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        {bookclubs && (
                            <BookclubOverviewTable
                                bookclubs={bookclubs}
                                selectBookclub={setSelectedBookclub}
                                selectedBookclub={selectBookclub}
                            />
                        )}
                    </section>

                    {selectBookclub && (
                        <section className={styles.card} style={{ 
                            background: 'white', 
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            position: 'sticky',
                            top: '2rem'
                        }}>
                            <h2>
                                {selectBookclub.name}
                            </h2>
                            <BookclubInfo bookclub={selectBookclub} />
                        </section>
                    )}
                </div>
            </main>
        </>
    );
};

export default Bookclubs;
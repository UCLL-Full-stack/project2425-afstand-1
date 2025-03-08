import BookclubInfo from "@components/bookclubs/BookclubInfo";
import BookclubOverviewTable from "@components/bookclubs/BookclubOverviewTable";
import Header from "@components/header";
import BookclubService from "@services/BookclubService";
import { Bookclub } from "@types";
import Head from "next/head";
import { useEffect, useState } from "react";

const Bookclubs: React.FC = () => {
    const [bookclubs, setBookclubs] = useState<Array<Bookclub>>();
    const [selectedBookclub, setSelectedBookclub] = useState<Bookclub>();
    
    const getBookclubs = async () => {
        const response = await BookclubService.getAllBookclubs();
        const bookclubs = await response.json();
        setBookclubs(bookclubs);
    }

    // const getBookclubs = async () => { 
    //     try { 
    //         const response = await BookclubService.getAllBookclubs(); 
    //         console.log('Response:', response); 

    //         // Parse JSON 
    //         const bookclubs = await response.json(); 
    //         console.log('Bookclubs:', bookclubs); 
            
    //         // Update state 
    //     setBookclubs(bookclubs); 
    // } catch (error) 
    //     { console.error('Error fetching bookclubs:', error); 

    //     } 
    // }

    useEffect(() => {
        getBookclubs();
    }, [])

    return (
        <>
            <Head>
                <title>Bookclubs</title>
            </Head>
            <Header />
            <main>
                <h1>Bookclubs</h1>
                <section>
                    {bookclubs && (
                        <BookclubOverviewTable
                            bookclubs={bookclubs}
                            selectBookclub={setSelectedBookclub}
                        />
                    )}
                </section>

                {selectedBookclub && (
                    <section>
                        <h2>
                            {selectedBookclub.name}:
                        </h2>
                        {selectedBookclub && (
                            <BookclubInfo bookclub={selectedBookclub} />
                        )}
                    </section>
                )}
            </main>
        </>
    );
};

export default Bookclubs;


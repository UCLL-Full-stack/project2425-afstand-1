import React from "react";
import { Bookclub } from "@types";
import { useRouter } from "next/router";

type Props = {
    bookclub: Bookclub
};

const BookclubInfo: React.FC<Props> = ({bookclub}: Props) => {
    const router = useRouter();

    const handleNavigate = () => {
        router.push(`/bookclubs/${bookclub.id}`);
    };

    return (
        <>
            {bookclub && (
                <div>
                    <p>{bookclub.description}</p>

                    <div>
                        <div>
                            <p>Members: {bookclub.members.length}</p>
                        </div>
                        <div>
                            <p>Currently reading: {bookclub.books?.filter(book => book.status === 'reading').length || 'Currently not reading anything'}</p>
                        </div>
                        <div>
                            <p>Books read: {bookclub.books?.filter(book => book.status === 'completed').length || 0}</p>
                        </div>
                        <div>
                            <p>Last read: {bookclub.books?.filter(book => book.status === 'recent').length || 'No book'}</p>
                        </div>
                        <div>
                            <p>Last 5 books read:</p>
                        </div>
                        <button onClick={handleNavigate}>
                            Visit Bookclub Page
                        </button>



                    </div>
                </div>
            )}
        </>
    );
};

export default BookclubInfo;
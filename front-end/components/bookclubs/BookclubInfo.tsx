import React from "react";
import { Bookclub } from "@types";

type Props = {
    bookclub: Bookclub
};

const BookclubInfo: React.FC<Props> = ({bookclub}: Props) => {
    return (
        <>
            {bookclub && (
                <div>
                    <p>{bookclub.id}</p>
                    <p>{bookclub.name}</p>
                    <p>{bookclub.description}</p>
                    <p>{bookclub.members.map((member, index) => ( <span key={index}>{member.username}</span> )) || "No members available"}</p>
                    <p>{bookclub.books?.map((book, index) => ( <span key={index}>{book.title}</span> )) || "No books available"}</p>
                </div>
            )}
        </>
    );
};

export default BookclubInfo;

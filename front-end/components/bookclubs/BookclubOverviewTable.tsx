import React from "react";
import { Bookclub } from "@types";

type Props = {
    bookclubs: Array<Bookclub>;
    selectBookclub: (bookclub: Bookclub) => void;
    selectedBookclub?: Bookclub | null;
};

const BookclubOverviewTable: React.FC<Props> = ({bookclubs,selectBookclub,selectedBookclub}: Props) => {
    return (
        <>
            {bookclubs && (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Creator</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookclubs.map((bookclub, index) => (
                            <tr
                                key={index}
                                onClick={() => selectBookclub(bookclub)}
                                role="button"
                                className={selectedBookclub?.id === bookclub.id ? 'table-active' : ''}
                            >
                                <td>{bookclub.name}</td>
                                <td>{bookclub.description}</td>
                                <td>{bookclub.creator.username}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default BookclubOverviewTable;

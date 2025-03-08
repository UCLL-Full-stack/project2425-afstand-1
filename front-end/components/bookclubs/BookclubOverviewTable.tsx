import React from "react";
import { Bookclub } from "@types";

type Props = {
    bookclubs: Array<Bookclub>;
    selectBookclub: (bookclub: Bookclub) => void;
};

const BookclubOverviewTable: React.FC<Props> = ({bookclubs,selectBookclub,}: Props) => {
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

const getAllBookclubs = () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + "/bookclubs", {
        method: "GET",
    });

};

const BookclubService = {
    getAllBookclubs,
};

export default BookclubService;
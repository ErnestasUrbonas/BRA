import axios from 'axios'

const BOOK_BASE_REST_API_URL = 'http://localhost:8080/api/v1/books';

class BookService {

    getAllBooks() {
        return axios.get(BOOK_BASE_REST_API_URL)
    }

    createBook(book) {
        return axios.post(BOOK_BASE_REST_API_URL, book)
    }
}

export default new BookService();
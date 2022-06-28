import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import BookService from "../services/BookService"

const ListBooks = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {

        BookService.getAllBooks().then((response) => {
            setBooks(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center'> List of Books </h2>
            <Link to="/add-book" className="btn btn-primary mb-2" > Add Book </Link>
            <table className='table table-bordered table-striped'>
                <thead>
                    <th> Book Id</th>
                    <th> Book Title </th>
                    <th> Book Summary</th>
                    <th> Book Category</th>
                </thead>
                <tbody>
                    {
                        books.map(
                            books =>
                                <tr key={books.id}>
                                    <td> {books.id} </td>
                                    <td> {books.title} </td>
                                    <td> {books.summary} </td>
                                    <td> {books.category} </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListBooks
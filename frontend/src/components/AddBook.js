import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BookService from '../services/BookService'
import { Link } from 'react-router-dom'

const AddBook = () => {

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate();

    const saveBook = (e) => {
        e.preventDefault();

        const book = { title, summary, category }

        BookService.createBook(book).then((response) => {

            console.log(response.data)

            navigate('/books');

        }).catch(error => {
            console.log(error)
        })

    }
    return (
        <div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'> Add Book </h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> Title :</label>
                                    <input
                                        type="text"
                                        placeholder='Enter title'
                                        name="title"
                                        className='form-control'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> Summary :</label>
                                    <input
                                        type="text"
                                        placeholder='Enter Summary'
                                        name="title"
                                        className='form-control'
                                        value={summary}
                                        onChange={(e) => setSummary(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> Category :</label>
                                    <input
                                        type="text"
                                        placeholder='Enter category'
                                        name="title"
                                        className='form-control'
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className='btn btn-success' onClick={(e) => saveBook(e)} >Submit</button>
                                <Link to="/books" className="btn btn-danger" > Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddBook
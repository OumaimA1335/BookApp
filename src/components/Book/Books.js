import React, { useEffect, useState } from 'react'
import axios from "axios";
import Book from '../Book/Book';
const Url = "http://localhost:5000/Books";
const fetchHandler = async () => {
    return await axios.get(Url).then((res) => res.data);

};

function Books() {
    const [books, setBooks] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.books));
    },[]);
    console.log(books);

    return (
        <div>Books
           <ul>
           {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
           </ul>
        </div>
    )
}

export default Books
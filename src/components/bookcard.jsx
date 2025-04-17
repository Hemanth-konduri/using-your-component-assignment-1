// write the book component code here
import React from 'react'

function BookCard({ book }) {
    return(
        <div className="book-card" style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            margin: '10px',
            width: '200px',
            textAlign: 'center',
            backgroundColor: '#f9f9f9'
          }}>
        <img src={book.image} alt={book.image} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '6px' }} />
        <h3>{book.name}</h3>
        <p>Genre: {book.genre}</p>
        <p>Author: {book.author}</p>
        </div>
    )
}

export default BookCard;
import React from 'react';

const Card = ({ book }) => {

  const [status, setStatus] = React.useState(false);

  const setLikeStatus = (e) => {
    book.isFav = !book.isFav;
    setStatus(!status);
  }

  const setReadStatus = (e) => {
    book.read = !book.read;
    setStatus(!status);
  }

  return (
    <div className="card" >
      <div className="card-img" style={{ "backgroundImage": `url(${book.thumbnailUrl})` }} alt={`${book.title} cover`}>
        <button className="fav" onClick={setLikeStatus}>{book.isFav ? "Unlike" : "Like"}</button>
        <button className="read" onClick={setReadStatus}>{book.read ? "Unread" : "Read"}</button>
      </div>
      <div className="card-content">
        <h1 className="card-title">{book.title}</h1>
        <p className="authors">Authors:<br />
          {book.authors.map((author) => (
            <span key={`${author}${book.isbn}`} className="author">{author} </span>
          ))}
        </p>
        <p className="categories">Categories:<br />
          {book.categories.map((category) => (
            <span key={`${category}${book.isbn}`} className="category">{category} </span>
          ))}
        </p>

        <p className="pages">Pages: {book.pageCount}</p>
        <p className="description">Description: {book.shortDescription}</p>
      </div>
    </div>
  );
};

export default Card;
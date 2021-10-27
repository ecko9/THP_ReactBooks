import React from 'react';
import Card from 'components/BookList/Card';
import SearchBar from 'components/BookList/SearchBar';

const BookList = () => {

  const [bookList, setBookList] = React.useState([]);
  const [bookListSearch, setBookListSearch] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [checkFav, setCheckFav] = React.useState(false);
  const [checkRead, setCheckRead] = React.useState(false);

  const searching = (e) => {
    e.preventDefault()
    setInput(e.target.firstChild.value);
  }

  const changeFavStatus = (e) => {
    setCheckFav(!checkFav);
  }

  const changeReadStatus = (e) => {
    setCheckRead(!checkRead)
  }

  React.useEffect(
    () => {
      let arrayTmp = [];
      bookList.map((book) => {
        if (book.title.includes(input)) {
          if (checkFav && book.isFav)
            return arrayTmp.push(book);
          else if (checkRead && book.read)
            return arrayTmp.push(book);
          else if (checkFav === false && checkRead === false)
            return arrayTmp.push(book);
          return false;
        }
        return true;
      })
      setBookListSearch(arrayTmp);
      return (
        <></>
      );
    },
    [input, checkFav, checkRead]
  );

  React.useEffect(
    () => {
      let arrayTmp = [];
      fetch("https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json")
        .then((response) => response.json())
        .then((response) => {
          for (let book of response.books[0])
            arrayTmp.push(book);
          setBookList(arrayTmp);
          setBookListSearch(arrayTmp);
          return;
        })
        .catch((error) => console.error(error));
      return (
        <></>
      );
    },
    []
  );

  return (
    <div>
      <SearchBar onSubmit={searching} fav={changeFavStatus} read={changeReadStatus} /><br />
      <div className="booklist">
        {bookListSearch.map((book, i) => (
          <Card book={book} key={`book${i}`} />
        ))}
      </div>
    </div>
  );
};

export default BookList;
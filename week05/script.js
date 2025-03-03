
// a list of book objects
const allBooks = {
    "books": [
      {
        "id": 8,
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
      },
      {
        "id": 3,
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
      },
      {
        "id": 22,
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
      },
      {
        "id": 19,
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
      },
      {
        "id": 2,
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600
      },
      {
        "id": 12,
        "author": "Unknown",
        "country": "India/Iran/Iraq/Egypt/Tajikistan",
        "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/one-thousand-and-one-nights.jpg",
        "language": "Arabic",
        "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights",
        "pages": 288,
        "title": "One Thousand and One Nights",
        "year": 1200
      },
      {
        "id": 98,
        "author": "Unknown",
        "country": "Iceland",
        "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/njals-saga.jpg",
        "language": "Old Norse",
        "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga",
        "pages": 384,
        "title": "Nj\u00e1l's Saga",
        "year": 1350
      },
      {
        "id": 106,
        "author": "Jane Austen",
        "country": "United Kingdom",
        "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/pride-and-prejudice.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
        "pages": 226,
        "title": "Pride and Prejudice",
        "year": 1813
      },
      {
        "id": 76,
        "author": "Honor\u00e9 de Balzac",
        "country": "France",
        "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/le-pere-goriot.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot",
        "pages": 443,
        "title": "Le P\u00e8re Goriot",
        "year": 1835
      },
      {
        "id": 49,
        "author": "Samuel Beckett",
        "country": "Republic of Ireland",
        "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/molloy-malone-dies-the-unnamable.jpg",
        "language": "French, English",
        "link": "https://en.wikipedia.org/wiki/Molloy_(novel)",
        "pages": 256,
        "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
        "year": 1952
      },
      {
        "id": 18,
        "author": "Giovanni Boccaccio",
        "country": "Italy",
        "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/the-decameron.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/The_Decameron",
        "pages": 1024,
        "title": "The Decameron",
        "year": 1351
      },
      {
        "id": 27,
        "author": "Jorge Luis Borges",
        "country": "Argentina",
        "imageLink": "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/ficciones.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Ficciones",
        "pages": 224,
        "title": "Ficciones",
        "year": 1965
      }
    ]
  };

// a function to generate a display of all of the books in an array
const renderBooks = (bookArray, listView) => {
  const content = document.getElementById("content");
  let innerContent = '';
  
  if (listView) {
    innerContent += '<ul class="myList">';
    bookArray.books.forEach(book => {
      innerContent += `<li><em>${book.title}</em> written by <em>${book.author}</em></li>`;
    });
    innerContent += '</ul>';
  } else {
    innerContent += '<div class="booksGrid">';
    bookArray.books.forEach(book => {
      innerContent += `<div class="book">
        <img src="${book.imageLink}"/>
        <div class="title">${book.title}</div>
        <em>by</em>
        <div class="author">${book.author}</div>
        <a href="${book.link}">More info</a>
      </div>`;
    });
    innerContent += '</div>';
  }
  
  content.innerHTML = innerContent;
};

// an event handler for the control button
document.getElementById('control').onclick = (event) => {
  toggleView();
};

const toggleView = () => {
  const controlButton = document.getElementById("control");
  const listView = controlButton.dataset.view === "listView";
  
  if (listView) {
    renderBooks(allBooks, false); // render as grid view
    controlButton.dataset.view = "gridView";
    controlButton.textContent = "Change to List View";
  } else {
    renderBooks(allBooks, true); // render as list view
    controlButton.dataset.view = "listView";
    controlButton.textContent = "Change to Grid View";
  }
};

window.onload = () => {
  toggleView(); // initial render as list view
};

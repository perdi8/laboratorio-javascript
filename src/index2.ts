/// READ BOOKS

// OPCIONAL

interface isBooksRead {
    (books: { title: string; isRead: boolean }[], titleToSearch: string): void;
  }
  
  const booksType: { title: string; isRead: boolean }[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true }
  ];
  
  const isBookReadType: isBooksRead = (books, titleToSearch) => {
    for (const book of books) {
      if (book.title === titleToSearch && book.isRead === true) {
        return true;
      }
      if (book.title === titleToSearch && book.isRead === false) {
        return false;
      }
    }
    if (books[0].title !== titleToSearch) {
      return false;
    }
  };
  
  console.log(isBookReadType(booksType, "Devastación"));
  console.log(isBookReadType(booksType, "Canción de hielo y fuego"));
  console.log(isBookReadType(booksType, "Los Pilares de la Tierra"));
  
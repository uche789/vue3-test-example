import books from "@/assets/books.json";

export interface Book {
  id: number;
  title: string;
  isbn?: string;
  pageCount: number;
  publishedDate?: {
    $date: string;
  };
  thumbnailUrl?: string;
  longDescription?: string;
  shortDescription?: string;
  status: string;
  authors: string[];
  categories: string[];
}

export interface Product {
  id: string;
  book: Book;
  quantity: number;
}

class BookServce {
  getBooks(): Book[] {
    return books;
  }
  getByTitle(query: string): Book[] {
    return books.filter((book: Book) =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  getBook(id: number): Book | undefined {
    return books.find((book: Book) => book.id === id);
  }
  getRecommendedBooks() {
    let index = 0;
    const list: Book[] = [];

    while (index < 10 || index >= books.length) {
      list.push(books[index]);
      index++;
    }

    return list;
  }
}

export default new BookServce();

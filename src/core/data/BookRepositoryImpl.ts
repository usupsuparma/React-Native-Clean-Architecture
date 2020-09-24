import {BookRepository} from '../domain/BookRepository';
import {Book} from './Book';

class BookDTO {
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export class BookRepositoryImpl implements BookRepository {
  jsonUrl = 'https://jsonplaceholder.typicode.com/users';
  async getBooks(): Promise<Book[]> {
    const res = await fetch(this.jsonUrl);
    const jsonData = await res.json();
    console.log(jsonData);
    //this mapping can be moved to a separate file if this gets complex just to keep the impl layer clean
    return jsonData.map((book: BookDTO) => new Book(123, book.name));
  }

  getBook(): Book {
    return new Book(123, 'Harry Potter');
  }
}

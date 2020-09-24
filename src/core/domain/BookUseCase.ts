import {Book} from '../data/Book';
import {BookRepository} from './BookRepository';

export interface BookService {
  getSampleBooks(): Promise<Book[]>;
  getSampleBook(): Book;
}

export class BookServiceImpl implements BookService {
  bookRepo: BookRepository;

  constructor(bookRepo: BookRepository) {
    this.bookRepo = bookRepo;
  }

  getSampleBook(): Book {
    return this.bookRepo.getBook();
  }

  async getSampleBooks(): Promise<Book[]> {
    return await this.bookRepo.getBooks();
  }
}

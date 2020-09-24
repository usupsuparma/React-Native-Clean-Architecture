import {BookServiceImpl} from '../domain/BookUseCase';
import {BookRepositoryImpl} from '../data/BookRepositoryImpl';

function getSampleBookData() {
  let bookRepository = new BookRepositoryImpl();
  let bookService = new BookServiceImpl(bookRepository);
  return bookService.getSampleBooks();
}

export default getSampleBookData;

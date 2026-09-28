import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';
import { Book } from './entities/book.entity.js';

@Injectable()
export class BookService {
  private books: Book[] = [{ id: 1, title: 'testing', price: 350, createdAt: new Date(), updatedAt: new Date() }];
  
  create(createBookDto: CreateBookDto) {
    if(!createBookDto){
      throw new BadRequestException('Verifier votre data');
    }
    const lastBook: Book = this.books[this.books.length - 1];
    const nextId: number = lastBook ? lastBook.id + 1 : 1;
    const newBook:Book = {id:nextId,...createBookDto, createdAt: new Date(), updatedAt: new Date()};
    this.books.push(newBook);
    return {message: 'Book created successfully', data: this.books};
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}

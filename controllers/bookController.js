import BookService from '../services/bookService.js';
import BookRepository from '../repo/bookRepo.js';

import BookModel from '../models/book.js';


const bookRepository = new BookRepository(BookModel);
const bookService = new BookService(bookRepository);

export const addBook = async (req, res, next) => {
    try {
        const response = await bookService.addBook(req);
        res.statusCode = response.statusCode;

        return res.json({message: response.message, data: response.data});
    } catch (error) {
        next (error);
    }
};


export const getAllBooks = async (req, res, next) => {
    try {
      const response = await bookService.getAllBooks(req);
      res.statusCode = response.statusCode;
      return res.json({ message: response.message, data: response.data });
    } catch (error) {
      next(error);
    }
  };
  export const getBookById = async (req, res, next) => {
    try {
      const response = await bookService.getBookById(req);
      res.statusCode = response.statusCode;
      return res.json({ message: response.message, data: response.data });
    } catch (error) {
      next(error);
    }
  };
  
  export const updateBookById = async (req, res, next) => {
    try {
      const response = await bookService.updateBookById(req);
      res.statusCode = response.statusCode;
      return res.json({ message: response.message, data: response.data });
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteBookById = async (req, res, next) => {
    try {
      const response = await bookService.deleteBookById(req);
      res.statusCode = response.statusCode;
      return res.json({ message: response.message, data: response.data });
    } catch (error) {
      next(error);
    }
};
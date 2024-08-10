import express from "express"

import { addBook, getAllBooks, getBookById, updateBookById, deleteBookById } from '../controllers/bookController.js';


const router = express.Router();

router.post('/book/add', addBook);
router.get('/books', getAllBooks);
router.get('/book/:uuid', getBookById);
router.put('/book/:uuid', updateBookById);
router.delete('/book/:uuid', deleteBookById);


export default router;


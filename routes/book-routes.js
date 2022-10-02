const express = require('express');
const router = express.Router();
const BooksContoller = require('../controllers/Books_contoller');



router.get("/", BooksContoller.getAllBooks);
router.post("/", BooksContoller.addBook);
router.get("/:id", BooksContoller.getById);
router.put("/:id", BooksContoller.updateBook);
router.delete("/:id", BooksContoller.deleteBook);
module.exports=router;
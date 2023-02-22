import Book from "../Book.js";
import 'dotenv/config.js'
import '../../config/database.js'

let books = [
    {
      title: "Spider-Man: No More",
      date: new Date("2018-11-02"),
      category_id: "63f6827fbc39654697aaa394"
    },
    {
      title: "Avengers: Endgame - The Official Movie Special",
      date: new Date("2019-11-02"),
      category_id: "63f6827fbc39654697aaa394"
    },
    {
      title: "One Piece, Vol. 1",
      date: new Date("2003-11-02"),
      category_id: "63f6827fbc39654697aaa392"
    },
    {
      title: "Naruto, Vol. 1",
      date: new Date("2003-11-02"),
      category_id:"63f6827fbc39654697aaa392"
    }
  ];

Book.insertMany(books)
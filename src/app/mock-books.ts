import { Book } from "./components/book/book.dto";

export const books: Book[] = [
    {
        title: 'As ondas',
        autor: 'Virginia Woolf',
        genre: {
            id: 'romance',
            value: 'Romance',
            books: []
        },
        favorite: false,
        image: 'https://m.media-amazon.com/images/I/81D2d6LqZdS._AC_UF1000,1000_QL80_.jpg'
    },
    {
        title: 'As ondas2',
        autor: 'Virginia Woolf',
        genre: {
            id: 'romance',
            value: 'Romance',
            books: []
        },
        favorite: false,
        image: 'https://m.media-amazon.com/images/I/81D2d6LqZdS._AC_UF1000,1000_QL80_.jpg'
    },
]
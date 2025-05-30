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
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wC...'
    },
]
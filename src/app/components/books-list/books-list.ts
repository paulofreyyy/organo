import { Genre } from './../book/book.dto';
import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book.dto';
import { books } from '../../mock-books';
import { GenreComponent } from "../genre/genre";

@Component({
    selector: 'app-books-list',
    imports: [GenreComponent],
    templateUrl: './books-list.html',
    styleUrl: './books-list.css'
})
export class BooksList implements OnInit {
    genres: Genre[] = [];
    booksByGenre: Map<string, Book[]> = new Map();

    ngOnInit() {
        this.booksByGenre = new Map();

        books.forEach((book) => {
            const genreId = book.genre.id;

            if (!this.booksByGenre.has(genreId)) this.booksByGenre.set(genreId, [])

            this.booksByGenre.get(genreId)?.push(book)
        })

        this.genres = [
            {
                id: 'romance',
                value: 'Romance',
                books: this.booksByGenre.get('romance') ?? []
            },
            {
                id: 'misterio',
                value: 'Mistério',
                books: this.booksByGenre.get("misterio") ?? []
            },
            {
                id: 'fantasia',
                value: 'Fantasia',
                books: this.booksByGenre.get("fantasia") ?? []
            },
            {
                id: 'ficcao-cientifica',
                value: 'Ficção Científica',
                books: this.booksByGenre.get("ficcao-cientifica") ?? []
            },
            {
                id: 'tecnicos',
                value: 'Técnicos',
                books: this.booksByGenre.get("tecnicos") ?? []
            },
        ]
    }
}

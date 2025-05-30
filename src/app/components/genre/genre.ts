import { Component } from '@angular/core';
import { BookComponent } from "../book/book";
import { books } from '../../mock-books';

@Component({
    selector: 'app-genre',
    imports: [BookComponent],
    templateUrl: './genre.html',
    styleUrl: './genre.css'
})
export class Genre {
    book = books[0]
}

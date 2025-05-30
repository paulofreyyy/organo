import { Genre } from './../book/book.dto';
import { Component, input } from '@angular/core';
import { BookComponent } from "../book/book";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-genre',
    imports: [BookComponent, CommonModule],
    templateUrl: './genre.html',
    styleUrl: './genre.css'
})
export class GenreComponent {
    genre = input.required<Genre>();
}

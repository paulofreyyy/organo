import { Component, input } from '@angular/core';
import { Book } from './book.dto';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-book',
    imports: [CommonModule],
    templateUrl: './book.html',
    styleUrl: './book.css'
})
export class BookComponent {
    book = input.required<Book>()

    toggleFavorite(){
        this.book().favorite = !this.book().favorite
    }
}

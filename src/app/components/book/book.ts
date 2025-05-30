import { Component, input } from '@angular/core';
import { Book } from './book.dto';

@Component({
    selector: 'app-book',
    imports: [],
    templateUrl: './book.html',
    styleUrl: './book.css'
})
export class BookComponent {
    book = input.required<Book>()

    toggleFavorite(){
        this.book().favorite = !this.book().favorite
    }
}

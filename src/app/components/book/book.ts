import { Component } from '@angular/core';

@Component({
    selector: 'app-book',
    imports: [],
    templateUrl: './book.html',
    styleUrl: './book.css'
})
export class Book {
    book = {
        title: 'As ondas',
        autor: 'Virginia Woolf',
        favorite: false,
        image: 'https://m.media-amazon.com/images/I/81D2d6LqZdS._AC_UF1000,1000_QL80_.jpg'
    }

    toggleFavorite(){
        this.book.favorite = !this.book.favorite
    }
}

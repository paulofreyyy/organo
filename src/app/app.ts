import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { Footer } from "./components/footer/footer";
import { BooksList } from "./components/books-list/books-list";
import { Genre } from "./components/genre/genre";

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, Footer, BooksList, Genre],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected title = 'organo';
}

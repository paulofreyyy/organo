import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { Footer } from "./components/footer/footer";
import { BooksList } from "./components/books-list/books-list";

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, Footer, BooksList],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected title = 'organo';
}

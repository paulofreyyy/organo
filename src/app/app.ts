import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { Footer } from "./components/footer/footer";
import { Book } from "./components/book/book";

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, Footer, Book],
    templateUrl: './app.html',
    styleUrl: './app.css'
})
export class App {
    protected title = 'organo';
}

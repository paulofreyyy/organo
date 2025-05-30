export interface Book {
    title: string,
    autor:string,
    favorite: boolean,
    genre: Genre,
    image: string
}

export interface Genre{
    id: string;
    value: string;
    books: Book[]
}
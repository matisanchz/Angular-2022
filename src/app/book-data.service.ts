import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Book } from './book-list/book';

const URL = 'https://637cdd2416c1b892ebc166f4.mockapi.io/api/books';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Book[]>{
    return this.http.get<Book[]>(URL)
            .pipe(
              tap((books: Book[])=>books.forEach(book => book.quantity=0))
            );
  }

  public get(): Observable<Book[]>{
    return this.http.get<Book[]>(URL);
  }

  public getById(book:Book): Observable<Book[]>{
    return this.http.get<Book[]>(URL+"/"+book.id);
  }

}

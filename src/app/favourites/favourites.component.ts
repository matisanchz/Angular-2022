import { Component, OnInit } from '@angular/core';
import { Book } from '../book-list/book';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})

export class FavouritesComponent implements OnInit {

  books: Book[] = [];
  noFav: string = "assets/img/emptyfav.png";
  fav: string = "assets/img/fav.png";

  constructor(
    private booksDataService: BookDataService) {
    this.booksDataService.get()
    .subscribe(books=>this.books = books);
  }

  ngOnInit(): void {
  }

  addToFavourite(book: Book):void{
    if(book.favorito){
      book.favorito=false;
    }else{
      book.favorito=true;
    }
  }
}

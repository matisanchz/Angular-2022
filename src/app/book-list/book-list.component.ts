import { Component, OnInit } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { BookDataService } from '../book-data.service';
import { BookTotalService} from '../book-total.service';
import { Subscription } from 'rxjs';
import { Book } from './book';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  
  books: Book[] = []

  constructor(
    private cart: BookCartService,
    private booksDataService: BookDataService,
    private totalService: BookTotalService) {
   }

  ngOnInit(): void {
    this.booksDataService.getAll()
    .subscribe(books=>this.books = books);
  }

  calculate(){
    this.totalService.sendClickEvent();
  }

  addToCart(book: Book):void{
    this.cart.addToCart(book);
    book.stock -= book.quantity;
    book.quantity = 0;
  }
  
  removeToCart(book: Book):void{
    let item: Book;
    item = this.cart.getItem(book);
    if(item){
      this.cart.removeToCart(item);
      book.stock += item.quantity;
    }
  }

  maxReached(m: string){
    alert(m);
  }

}

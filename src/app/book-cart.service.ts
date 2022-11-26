import { Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import { Book } from './book-list/book';

@Injectable({
  providedIn: 'root',
})
export class BookCartService {

  private _cartList: Book[] = [];
  cartList: BehaviorSubject<Book[]>= new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(book: Book){
    let item: Book;
    item = (this._cartList.find((v1) => v1.titulo == book.titulo)) as Book;
    if(book.quantity>0){
      if(!item){
        this._cartList.push({... book});
      }else{
        item.quantity += book.quantity;
      }
      this.cartList.next(this._cartList);
    }
  }

  removeToCart(book: Book){
    if(this._cartList.find((v1) => v1.titulo == book.titulo)){
      const index = this._cartList.indexOf(book, 0);
      if (index > -1) {
        this._cartList.splice(index, 1);
      }
    }
    this.cartList.next(this._cartList);
  }

  getCartList(){
    return this._cartList;
  }

  getItem(book: Book){
    let item: Book;
    item = (this._cartList.find((v1) => v1.titulo == book.titulo)) as Book;
    return item;
  }

}

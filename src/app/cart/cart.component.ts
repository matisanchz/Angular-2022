import { Component, OnInit } from '@angular/core';
import { BookCartService } from '../book-cart.service';
import { Book } from '../book-list/book';
import {Observable} from "rxjs";
import { BookListComponent } from '../book-list/book-list.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [BookListComponent]
})
export class CartComponent implements OnInit {

  private _cartList: Book[] = [];
  cartList$: Observable<Book[]>; 
  constructor(private cart: BookCartService) {
    this.cartList$ = cart.cartList.asObservable();
    this._cartList = cart.getCartList();
  }

  ngOnInit(): void {
  }

  buy(){
    const input = document.getElementById('mail') as HTMLInputElement | null;
    const value = input?.value;
    if(this._cartList.length>0){
      if(value){
        this.refresh();
        alert("Se ha enviado un correo a "+value+" con los datos a seguir para la compra");
      }
      else{
        alert("No ingreso un mail valido");
      }
    }else{
      alert("El carro esta vacio");
    }
    
  }

  refresh(): void {
    window. location. reload();
  }

}

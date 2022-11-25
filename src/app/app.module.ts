import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import { HttpClientModule} from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { FavouritesComponent } from './favourites/favourites.component';
import { CartComponent } from './cart/cart.component';
import { LibraryBooksComponent } from './library-books/library-books.component';
import { LibraryAboutComponent } from './library-about/library-about.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { LibraryHomeComponent } from './library-home/library-home.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    FavouritesComponent,
    CartComponent,
    LibraryBooksComponent,
    LibraryAboutComponent,
    InputIntegerComponent,
    LibraryHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

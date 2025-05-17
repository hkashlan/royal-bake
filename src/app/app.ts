import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Menu } from "./components/menu/menu";
import { SpecialDishes } from "./components/special-dishes/special-dishes";
import { AboutUs } from "./components/about-us/about-us";
import { Offers } from "./components/offers/offers";
import { Chefs } from "./components/chefs/chefs";
import { HeaderMenu } from "./components/header-menu/header-menu";
import { BookTable } from "./components/book-table/book-table";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, Footer, Menu, SpecialDishes, AboutUs, Offers, Chefs, HeaderMenu, BookTable]
})
export class App {
  title = 'royal-bake';
}

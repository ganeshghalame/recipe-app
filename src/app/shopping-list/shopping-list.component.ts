import { Component, OnInit } from '@angular/core';
import { Ingridient } from './ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingridients: Ingridient[] = [
    new Ingridient('', 10),
  ];
  constructor() { }

  ngOnInit() {
  }

}
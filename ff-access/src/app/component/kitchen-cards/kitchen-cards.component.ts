import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kitchen-cards',
  templateUrl: './kitchen-cards.component.html',
  styleUrls: ['./kitchen-cards.component.css']
})
export class KitchenCardsComponent implements OnInit {

  kitchen_group = {
    name:"Old Bill's Cafe",
    type:"Non-Vegetarian Bakery",
    img:"",
    desc:"Bill's kitchen is the premier kitchen for "
  }

  constructor() { }

  ngOnInit() {
  }

}

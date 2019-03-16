import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title='';
  UserButtonTitle = 'Login/Logout'
  
  kitchen_group = {
    name:"Old Bill's Cafe",
    type:"Non-Vegetarian Bakery",
    img:"",
    desc:"Bill's kitchen is the premier kitchen for "
  }

  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }

}

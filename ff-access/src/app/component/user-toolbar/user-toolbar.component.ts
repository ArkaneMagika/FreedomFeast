import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, ChildActivationStart } from '@angular/router';

@Component({
  selector: 'user-toolbar',
  templateUrl: './user-toolbar.component.html',
  styleUrls: ['./user-toolbar.component.css']
})
export class UserToolbarComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router:Router) { }

  title;
  UserButtonTitle;
  ngOnInit() {
    this.title='Users'
    this.UserButtonTitle = 'Login/Logout'
  }

}

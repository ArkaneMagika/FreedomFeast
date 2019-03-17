import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = new Login("","")
  isProvider=false;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  submitted = false;

  onSubmit(){
    this.submitted=true
    this.router.navigate(['/users'])
  }
}

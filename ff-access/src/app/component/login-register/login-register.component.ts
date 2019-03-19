import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  username:string;
  password:string;
  constructor() { }

  ngOnInit() {
  }

  LogInUser()
  {
    //After we make the user profiles & registration, change these variables to match the name/pwd of a specific user
   /* keeping this shelved because babby won't compile
    if(this.username == someUserName && this.password == thatUsersPassword)
    {
      Console.log("Successful login. Add code to redirect to correct view.");
    }
    else
    {
      Console.log("Invalid login.");
    }
    */
  }
}

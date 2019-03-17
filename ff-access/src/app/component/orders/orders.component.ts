import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  customerFormGroup:FormGroup;
  addressFormGroup:FormGroup;
  paymentFormGroup:FormGroup;

  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit() {
    this.customerFormGroup = this._formBuilder.group({
      customernameCtrl:['', Validators.required]
    });

    this.addressFormGroup = this._formBuilder.group({
      
    })

    this.paymentFormGroup = this._formBuilder.group({
      card_name:['', Validators.required],
      card_number:[Number, Validators.required],
      cvv:[Number, Validators.required],
      exp_date:[Date, Validators.required]
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';
import {ProviderregserviceService} from '../providerregservice.service'
import { FormGroup } from '@angular/forms';
import {HttpClientModule} from './app.component';

@Component({
  selector: 'app-providerregistration',
  templateUrl: './providerregistration.component.html',
  styleUrls: ['./providerregistration.component.css'],
  providers:[ProviderregserviceService]
})
export class ProviderregistrationComponent implements OnInit {
  serviceTest:any=[];
  //tserviceTest:any=[];
  submitted = false;
  selectedFile: File = null;
  questions = ['What is the name of your First School?','What is your pet Name?']
  states = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM',
          'FL','GA','GU','HI','ID','IL','IN','IA','KS','KY','LA',
          'ME','MH','MD','MA','MI','MN','MS','MO','MT','NE','NV',
          'NH','NJ','NM','NY','NC','ND','MP','OH','OK','OR','PW',
          'PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','VA',
          'WA','WV','WI','WY','AE','AA','AP'];
  
          @Input('group')
          public addressForm: FormGroup;
        
  constructor(private http: HttpClient) {}

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    onUpload() {
      const fd = new formData
      fd.append('image'), this.selectedFile, this.selectedFile.name);
      this.http.post(/*URL to send Request to */'', this.selectedFile);
      .subscribe(res => {
          console.log(res);
      });
    }
  }

  // selected(){
  //   console.log(this.selectedLevel.name);
  //   alert(this.selectedLevel.name);
  // }
  //event handler for the select element's change event
  
  constructor(private providervice:ProviderregserviceService) { }

  ngOnInit() {
    //this.providervice.getProviders().subscribe((data)=>{this.serviceTest=data;console.log(data)});
  }

  onSubmit(providerForm)
  {
    // console.log(userForm.firstname);
    // console.log(userForm.lastname);
    // console.log(userForm.email);
    // console.log(userForm.password);
   
    // console.log(userForm.singleSelect);
    
    // console.log(userForm.answer);
    
    //let ProviderDetails: Providerdata=userForm.value;
    //tserviceTest[]=userForm.value;
    this.providervice.getProviders(providerForm.value);
  }
  Sub():void
  {
    //console.log('hi');
this.submitted=true;
console.log(this.submitted);
  }
}

// class  Providerdata {
//   firstname: String,
//   lastname: String,
//   email: String,
//   password:String,
//   singleSelect:String,
//   answer:String
// };
//  export class ProviderRegistratio
// {
//   firstname:string;
//   lastname:string;
//   email:string;
//   password:string;
  
// }
// Provider:ProviderregistrationComponent
// {
//    firstname: 

//     public lastname: string,
//     public email: string,
//     public password: string
// };
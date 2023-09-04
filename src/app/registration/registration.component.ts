import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './service/registration.service';
import { Registration } from './model/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  registrationDetails:Registration[]=[];
   
  constructor(readonly registrationService:RegistrationService){

  }
  
  ngOnInit(): void {
   this.registrationDetails= this.registrationService.getRegistrationDetails();
    
  }
 
  onSubmit(registrationForm:any){
    console.log(registrationForm.value);
    this.registrationService.createRegistrationDetails(registrationForm);

  }

}

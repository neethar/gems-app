import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './service/registration.service';
import { Employee } from './model/registration';
import { Observable } from "rxjs";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  registrationDetails:Employee[]=[];
   
  constructor(readonly registrationService:RegistrationService){

  }
  
  ngOnInit(): void {
    this.registrationService.getRegistrationDetails();
   
    this.registrationService.getRegistrationDetails().subscribe(
      posts => {
       
        this.registrationDetails = posts;
        console.log("loaded posts 2",this.registrationDetails)
      },
      error => {
       
        
        console.log(error);
      }
    );
    
  }
 
  onSubmit(registrationForm:any){
    console.log(registrationForm.value);
    this.registrationService.createRegistrationDetails(registrationForm.value).subscribe(data => {
      console.log(data);
    });

  }
  
  
  deleteReg(id:string){
     this.registrationService.DeleteReg(id).subscribe(data => {
      console.log(data);
      this.registrationDetails = this.registrationDetails.filter(reg => reg.id !==id);
    });
   }

}

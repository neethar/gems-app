import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Registration } from "../model/registration";

@Injectable({
    providedIn: 'root'
  })
export class RegistrationService{
    constructor(readonly http:HttpClient){

    }
    createRegistrationDetails(registrationForm:any):Observable<any>{
        console.log(registrationForm.value);
       return  this.http.post("http://localhost:8080/register",registrationForm.value);
       
    }
   // getRegistrationDetails():Observable<Registration[]>{
        
      // return  this.http.get<Registration[]>("http://localhost:8080/register");
       
  //  }

    getRegistrationDetails():Registration[]{
        let  registrationList: Registration[];
           registrationList = [
            { firstname: "sree", lastname: 'Dr.sree',  employyeeno:"5802431",  toatlgems:"100", reason:"client appreciation", email:"sreenivasulu.anam@lxyz.com"},
            { firstname: "sree", lastname: 'reddy',employyeeno:"5802431",  toatlgems:"100", reason:"client appreciation", email:"sreenivasulu.anam@xyz.com" },
            { firstname: "sree", lastname: 'anam',employyeeno:"5802431",  toatlgems:"100", reason:"client appreciation", email:"sreenivasulu.anam@xyz.com" }
            
           
          ];
          return registrationList;
        
     }

}
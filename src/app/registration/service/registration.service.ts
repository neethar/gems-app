import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Employee } from "../model/registration";


@Injectable({
    providedIn: 'root'
  })
export class RegistrationService{
  private _headers: HttpHeaders;
 
    constructor(public http:HttpClient){
      this._headers = new HttpHeaders()
      .set('Content-type', 'application/json',)
      .set('Accept', 'application/json');
    }

    createRegistrationDetails(registrationForm:any):Observable<any>{
        console.log(registrationForm);
       return this.http.post("http://35.178.195.215:8081/employee", registrationForm);
      // return  this.http.post("http://18.130.109.125:8081/employee",registrationForm.value);
       
    }
   getRegistrationDetails():Observable<Employee[]>{
        
       return  this.http.get<Employee[]>("http://35.178.195.215:8081/employee");
       
    }
  DeleteReg(id:string){
    console.log(id);
    return this.http.delete("http://35.178.195.215:8081/employee/"+id);
  }

   // getRegistrationDetails():Employee[]{
      //  let  registrationList: Employee[];
      //     registrationList = [
        //    { id:"1",firstName: "sree", lastName: "Dr.sree", employyeeNo:"5802431",  toatlGems:"100", reason:"client appreciation", email:"sreenivasulu.anam@lxyz.com"},
        //    { id:"2",firstName: "sree", lastName: 'reddy',employyeeNo:"5802431",  toatlGems:"100", reason:"client appreciation", email:"sreenivasulu.anam@xyz.com" },
        //    {id:"3", firstName: "sree", lastName: 'anam',employyeeNo:"5802431",  toatlGems:"100", reason:"client appreciation", email:"sreenivasulu.anam@xyz.com" }
            
           
       //   ];
        //  return registrationList;
        
  //   }

}

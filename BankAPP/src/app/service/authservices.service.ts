import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {

  // database: any =
  //   {
  //     1000: { acno: 1000, uname: "Vignesh", password: 1000, Balance: 10000 }
  //   }
    username:any

  constructor(private http:HttpClient) { }
  register(acno:any,password:any,uname:any){
    const data={
      acno,
      uname,
      password
    }
    return this.http.post("http://localhost:3002/register",data)
  }
  //   var database:any = this.database
  //   if(acno in database)
  //   {
  //     return false
  //   }
  //   else{
  //     database[acno]={
  //       acno,
  //       uname,
  //       "password":pswd,
  //       Balance:0
  //     }
  //     console.log("database",this.database)
  //     return true
  //   }
  // }

  login(acno:any,password:any) 
  {
    const data={
      acno,
      password
    }
    return this.http.post("http://localhost:3002/login",data)
  }
}
//     let db=this.database
    

//     if (acno in db) 
//     {
//       if (password == db[acno]['password']) 
//       {
//         this.username=db[acno]["uname"]
//         localStorage.setItem('username',JSON.stringify(this.username))
//         return true
        
//       }
//       else 
//       {
//         alert("Incorrect Password")
//         return false
//       }
//     }
//     else 
//     {
//       alert("Not a user, Register first")
//       return false
//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthservicesService } from '../service/authservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // database: any =
  //   {
  //     1000: { acno: 1000, uname: "Vignesh", password: 1000, Balance: 10000 }
  //   }
  abc: any = "Welcome to BANK"
  accno: any = "Enter your account number"
  pass: any = "Enter your password"
  accountnumber: any = 0
  pswd1: any = ""
  constructor(private route: Router,private ds:AuthservicesService) { }

  ngOnInit(): void { }

  login() 
  {
    var acno: any = this.accountnumber
    var pswd: any = this.pswd1
    this.ds.login(acno,pswd)
    .subscribe((result:any)=>{
      alert(result.message)
      localStorage.setItem("currentacno",JSON.stringify(result.currentacno))
      localStorage.setItem("currentname",JSON.stringify(result.currentname))
      localStorage.setItem("Token",JSON.stringify(result.token))
      this.route.navigateByUrl('dashboard')



    },(result:any)=>{
      alert(result.error.message)
    })
  }

  //   if (acno in this.database) 
  //   {
  //     if (pswd == this.database[acno]['password']) 
  //     {
  //       alert("Login Successful")
  //       this.route.navigateByUrl("dashboard")
  //     }
  //     else 
  //     {
  //       alert("Incorrect Password")
  //     }
  //   }
  //   else 
  //   {
  //     alert("Not a user, Register first")
  //   }
  // }
//   acnochange(event: any) 
//   {
//     console.log(event)
//     console.log("INPUT: ", event.target.value)
//     this.accountnumber = event.target.value
//   }
//   passwordchange(event: any)
//   {
//     this.pswd1=event.target.value
//   }

}
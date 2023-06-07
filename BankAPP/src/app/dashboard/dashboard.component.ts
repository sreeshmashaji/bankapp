import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';
import { AuthservicesService } from '../service/authservices.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
const options={
headers:new HttpHeaders
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  accno: any
  pswd: any
  amount: any

  accnow: any
  pswdw: any
  amountw: any

  




  constructor(private ds: AuthservicesService,private http:HttpClient) { }

  ngOnInit(): void {
  }

  getOptions()
  {
    var Token=JSON.parse(localStorage.getItem('Token')||'')
    var headers=new HttpHeaders()
    if(Token){
      headers=headers.append('x-access-token',Token)
      options.headers=headers
    }
    return options
  }
  deposit() { 
    var acno=this.accno
    var password=this.pswd
    var amount=this.amount
    const a=this.getOptions()
    console.log("ghjdhfjhjf",a)
    const body={
      acno,
      password,
      amount
    }
    this.http.post('http://localhost:3002/deposit',body,this.getOptions())
    .subscribe((result:any)=>
    {
      alert(result.message)

    },(result)=>{
      alert(result.error.message);
    }
    )

    // var db = this.ds.database
    // var acc = this.accno
    // var psw = this.pswd
    // var amt = this.amount

    // if (acc in db) {
    //   if (psw == db[acc]["password"]) {
    //     db[acc]["Balance"] = Number(db[acc]["Balance"]) + Number(amt)
    //     db[acc]['transaction'] = {
    //       'Mode': "online",
    //       "Type": "Deposit",
    //       "Balance": amt
    //     }
    //     console.log("DATABASE", db)
    //     alert(`Amount ${amt} addedd successfully ,Current balance is ${db[acc]["Balance"]}`)
    //   }
    //   else {
    //     alert("check password")
    //   }
    // }
    // else {
    //   alert("No such acounts")
    // }
  }
   
  withdraw() {
    var acno=this.accnow
    var password=this.pswdw
    var amount=this.amountw

    const body={
      acno,
      password,
      amount
    }
    this.http.post('http://localhost:3002/withdraw',body,this.getOptions())
    .subscribe((result:any)=>
    {
      alert(result.message)

    },(result)=>{
      alert(result.error.message);
    }
    )
    // var db = this.ds.database
    // var acc = this.accnow
    // var psw = this.pswdw
    // var amt = this.amountw

    // if (acc in db) {
    //   if (psw == db[acc]["password"]) {
    //     if (Number(amt) < Number(db[acc]["Balance"]))
    //     {

    //       db[acc]["Balance"] = Number(db[acc]["Balance"]) - Number(amt)
    //       db[acc]['transaction'] = {
    //         'Mode': "online",
    //         "Type": "Deposit",
    //         "Balance": amt
    //       }
    //       console.log("DATABASE", db)
    //       alert(`Amount ${amt} debited successfully ,Current balance is ${db[acc]["Balance"]}`)
    //     }
    //     else {
    //       alert("insufficient balance")
    //     }
    //   }
    //   else {
    //     alert("check password")
    //   }

    // }
    // else {
    //   alert("No such accounts")
    // }
  }




}

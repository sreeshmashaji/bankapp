import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {
  FirstName:any
  LastName:any
  Age:any
  AccountNumber:any
  PancardNumber:any
  AAdhar:any
  dummyarray:any=[]
  credDATABASE:any=[]


  constructor() { }

  ngOnInit(): void {
  }
  creditcardfun(){
    this.credDATABASE[this.AccountNumber]={
      "FirstName":this.FirstName,
      "LastName":this.LastName,
      "Age":this.Age,
      "AccountNumber":this.AccountNumber,
      "PancardNumber":this.PancardNumber,
      "AAdhar":this.AAdhar,
      
    }
    alert("Applied successfully")

    this.dummyarray.push({
      "FirstName":this.FirstName,
      "LastName":this.LastName,
      "Age":this.Age,
      "AccountNumber":this.AccountNumber,
      "PancardNumber":this.PancardNumber,
      "AAdhar":this.AAdhar
    })

    console.log(this.credDATABASE)
    console.log(this.dummyarray)
  }

}

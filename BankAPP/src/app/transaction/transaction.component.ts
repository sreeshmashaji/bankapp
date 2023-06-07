import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
  datenew:any=new Date() 

  constructor(private http:HttpClient) { }
  transaction:any=[]
  ngOnInit(): void {
    var acno=JSON.parse(localStorage.getItem('currentacno')||'')
    
    this.http.post("http://localhost:3002/history",{
      "acno":acno,
      
    })
    
    .subscribe((result:any)=>
  {
    console.log("RESULT",result)
    this.transaction=result.transaction
    console.log("Transactions",this.transaction)
  })
  }

}

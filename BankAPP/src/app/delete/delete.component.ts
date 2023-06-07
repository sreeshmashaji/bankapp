import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  name:any
  acno:any
  delacno:any

  constructor(private http:HttpClient,private root:Router) { 
    this.acno=JSON.parse(localStorage.getItem('currentacno')||'')
    this.name=JSON.parse(localStorage.getItem('currentname')||'')
  }

  ngOnInit(): void {
  }

  delete(acno:any){
    this.http.delete(`http://localhost:3002/deleteacc/${acno}`)
    .subscribe((res:any)=>{
      console.log(res)
      this.root.navigateByUrl('')

    })

  }
  delacc()
  {
    this.delacno=JSON.parse(localStorage.getItem('currentacno')||'')
  }
  cancel(){
      this.delacno=''
  }

}

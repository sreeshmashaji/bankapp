import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthservicesService } from '../service/authservices.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // accno:any
  // name:any
  // pswd:any

  registerform = this.fb.group({
    accno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    name:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('')]]
  })

  constructor(private ds:AuthservicesService,private route:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  registercheck(){
    var acno:any = this.registerform.value.accno
    var uname:any = this.registerform.value.name
    var password:any = this.registerform.value.pswd

    if(this.registerform.valid){

      this.ds.register(acno,password,uname)
      .subscribe((result)=>{
        console.log("TEST ai",acno,password,uname)
        console.log("result : ",result);

    if(result){
      alert("Register successfully")
      this.route.navigateByUrl("")
    }
    // else{
    //   alert("Register failed")
      
    // }
  // }
  else{
    alert("not a valid form")
  }

      
  },(result)=>{
    console.log("test : ",result.error.message)
    alert(result.error.message)
  })
}
}
}



    


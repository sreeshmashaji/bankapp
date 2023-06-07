import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:any

  constructor(private route:Router) { 
    this.user=localStorage.getItem('username')
    console.log("tets",this.user)
  }

  ngOnInit(): void {
  }
logout(){
  this.route.navigateByUrl('')
}
}

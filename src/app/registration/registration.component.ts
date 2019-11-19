import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  emailAddress;city;country;firstname
  createarray=[]
  constructor() { }

  ngOnInit() {
  }
  login(){
    alert("login")
this.createarray=[{"email":this.emailAddress,"city":this.city,"country":this.country,"firstname":this.firstname}]
console.log("this.createarray=",this.createarray)
  }
}

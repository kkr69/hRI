import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  emailAddress;city;country;firstname
  id=0
  createarray=[]
  constructor() { }

  ngOnInit() {
  }
  login(){
    this.id++
    
    var obj:any
     obj=[{"Id":this.emailAddress,"city":this.city,"country":this.country,"firstname":this.firstname}]
for(var k in obj){
this.createarray.push(obj[k])
}
console.log("this.createarray",this.createarray)
  }


  Edit(hari){
var editid:any
editid=hari
var deitarray=[]
deitarray=this.createarray
for(var i=0;i<deitarray.length;i++){
if(editid==this.createarray[i].Id){
  this.emailAddress=this.createarray[i]['Id']
  this.city=this.createarray[i]['city']
  this.country=this.createarray[i]['country']
  this.firstname=this.createarray[i]['firstname']

}
}
  }
  update(hariid){
    var up:any
    up=hariid
console.log("up",up)
  }
  delete(del){
var deleteobj:any
deleteobj=del
var deletearray=[]
deletearray=this.createarray
for(var i=0;i<deletearray.length;i++){
  if(deleteobj==deletearray[i].Id){
    deletearray.splice(i,1)
  
  }
  }
  }
}

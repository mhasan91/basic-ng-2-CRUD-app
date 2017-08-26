import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 CRUD operation with an Array';
  employees = [
    {name:"Muhammad Hasan", position:"Web Developer"},
    {name:"Alex", position:"Designer"},
    {name:"Maria", position:"HR Manager"}
  ];
  //temporary containers
  model:any={};
  model2:any={};
  msg:any="";
  addEmployee(){
    this.employees.push(this.model);      //form se model men save kia tha 
    this.model = {};          //name ki field ko khali karde ta k next name dalen
    this.msg = "Record is successfully added..... "; 

  }
  deleteEmployee(i){
    this.employees.splice(i,1);         //har record alag index par hai
    this.msg = "Record is successfully deleted..... ";
    
  }
  myValue;
  editEmployee(k){
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k;

  }
  updateEmployee(){
    let k= this.myValue;
    for(let i=0; i<this.employees.length;i++){
      if(i==k){
        this.employees[i]= this.model2;
        this.model2 = {};
        this.msg = "Record is successfully updated..... ";
      }

    }

  }
  clickMe(){
    this.msg = "";
  }
}

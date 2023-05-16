import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {

  nomEmployee! : string;
  employees!: Employee[];
  allEmployees!: Employee[];
  searchTerm!: string;
  
  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.listeEmployee().subscribe(emps => {
      console.log(emps);
      this.employees = emps;
      });
      
  }

  rechercherEmps(){
    this.employeeService.rechercherParNom(this.nomEmployee).
    subscribe(emps => {
      console.log(emps);
      this.employees=emps;});
  }

  onKeyUp(filterText : string){
    this.employees = this.allEmployees.filter(item =>
    item.nomEmployee.toLowerCase().includes(filterText));
    }
    

}

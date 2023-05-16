import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit {

    employees? : Employee[]; //un tableau de employees

  constructor(private employeeService: EmployeeService) {
   //this.employees=[];
     }

  ngOnInit(): void {

    this.chargerEmployees();
  }

  chargerEmployees(){
    this.employeeService.listeEmployee().subscribe(emps => {
      console.log(emps);
      this.employees = emps;
      });
  }

supprimerEmployee(e: Employee)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.employeeService.supprimerEmployee(e.idEmployee).subscribe(() => {
        console.log("employee supprimé");
        this.chargerEmployees();     
      
});
}
 
 

}

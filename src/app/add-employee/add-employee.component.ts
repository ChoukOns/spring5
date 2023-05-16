import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from '../model/entreprise.model';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent implements OnInit {

  newEmployee = new Employee();
  entreprises! : Entreprise[];
  newIdEntr! : number;
  newEntreprise! : Entreprise;
  
  constructor(private employeeService: EmployeeService,
              private router : Router) { }

  ngOnInit(): void {

    this.employeeService.listeEntreprises().
          subscribe(entrps => {this.entreprises = entrps._embedded.entreprises;
            console.log(entrps);
        });
 
  }

 
  addEmployee(){
    this.newEmployee.entreprise = this.entreprises.find(entr => entr.idEntr == this.newIdEntr)!;
    this.employeeService.ajouterEmployee(this.newEmployee)
                      .subscribe(emp => {
                      console.log(emp);
                      this.router.navigate(['employees']);
                      }); 
    }




}

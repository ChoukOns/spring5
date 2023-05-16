import { Component, OnInit } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
import { Employee } from '../model/employee.model';
import { EmployeesComponent } from '../employees/employees.component';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-recherche-par-entreprise',
  templateUrl: './recherche-par-entreprise.component.html',
  styles: [
  ]
})
export class RechercheParEntrepriseComponent implements OnInit {
  IdEntreprise! : number;
  entreprises! : Entreprise[];
  employees! : Employee[];


  constructor(private employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.listeEntreprises().
      subscribe(entrs => {this.entreprises = entrs._embedded.entreprises;
      console.log(entrs);
    });

  }

  onChange() {
    this.employeeService.rechercherParEntreprise(this.IdEntreprise).
      subscribe(emps =>{this.employees=emps});

    }

}

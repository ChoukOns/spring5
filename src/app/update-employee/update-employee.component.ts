import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from '../model/entreprise.model';
import { Employee } from '../model/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styles: [
  ]
})
export class UpdateEmployeeComponent implements OnInit {

  currentEmployee = new Employee();
  entreprises! : Entreprise[];
  updatedEntrId! : number;
  
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.listeEntreprises().
    subscribe(entrs => {this.entreprises = entrs._embedded.entreprises;
    console.log(entrs);
    });


    this.employeeService.consulterEmployee(this.activatedRoute.snapshot.params['id']).
    subscribe( emp =>{ this.currentEmployee = emp; 
      this.updatedEntrId =   this.currentEmployee.entreprise.idEntr;
    
    } ) ;
    }
    

  

  updateEmployee() {
    this.currentEmployee.entreprise = this.entreprises.find(entr => entr.idEntr == this.updatedEntrId)!;
         this.employeeService.updateEmployee(this.currentEmployee).subscribe(emp => {
      this.router.navigate(['employees']); }
      );
  }

}

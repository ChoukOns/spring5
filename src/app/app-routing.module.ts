import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeesComponent } from './employees/employees.component';
import { RechercheParEntrepriseComponent } from './recherche-par-entreprise/recherche-par-entreprise.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';



const routes: Routes = [
  {path: "employees", component : EmployeesComponent},
  {path: "add-employee", component : AddEmployeeComponent},
  {path: "updateEmployee/:id", component: UpdateEmployeeComponent},
  {path: "rechercheParEntreprise", component : RechercheParEntrepriseComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "", redirectTo: "employees", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

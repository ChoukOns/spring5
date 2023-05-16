import { Injectable } from '@angular/core';
import { Entreprise } from '../model/entreprise.model';
import { Employee } from '../model/employee.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EntrepriseWrapper } from '../model/entrepriseWrapped.model';

const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiURL: string = 'http://localhost:8090/employees/api';
  apiURLEntr: string = 'http://localhost:8090/employees/entr';

  employees! : Employee[]; //un tableau de employees
  //entreprises : Entreprise[];
 

  constructor(private http : HttpClient) { 
    
    /* this.entreprises = [
      {idEntr : 1, nomEntr : "Medis"},
      {idEntr : 2, nomEntr : "AfterCode"}
    ]; */
    /*this.employees = [{idEmployee : 1, nomEmployee : "Ons", Salaire : 3000.600,
                      entreprise : {idEntr : 1, nomEntr : "AfterCode"} },
                     {idEmployee : 2, nomEmployee : "Mayssa", Salaire : 1050, 
                    entreprise :  {idEntr : 2, nomEntr : "Medis"}},
                     {idEmployee : 3, nomEmployee :"Lina", Salaire : 900.123,
                     entreprise : {idEntr : 1, nomEntr : "AfterCode"}}
                    ];*/
    
  }

  listeEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiURL+"/emp");
    }

    ajouterEmployee( emp: Employee):Observable<Employee>{
      return this.http.post<Employee>(this.apiURL, emp, httpOptions);
      }

      supprimerEmployee(id : number) {
        const url = `${this.apiURL}/${id}`;
        return this.http.delete(url, httpOptions);
        }

        
        consulterEmployee(id: number): Observable<Employee> {
          const url = `${this.apiURL}/${id}`;
          return this.http.get<Employee>(url);
          }

          trierEmployees(){
            this.employees = this.employees.sort((n1,n2) => {
              if (n1.idEmployee > n2.idEmployee) {
                  return 1;
              }
             if (n1.idEmployee < n2.idEmployee) {
                  return -1;
              }
            return 0;
          });
          }
      

          updateEmployee(emp :Employee) : Observable<Employee>
            {
                return this.http.put<Employee>(this.apiURL, emp, httpOptions);
            }

         
         
       listeEntreprises():Observable<EntrepriseWrapper>{
            return this.http.get<EntrepriseWrapper>(this.apiURLEntr);
            }     

  rechercherParEntreprise(idEntr: number): Observable<Employee[]> {
    const url = `${this.apiURL}/empsentr/${idEntr}`;
    return this.http.get<Employee[]>(url);
  } 

  rechercherParNom(nom: string):Observable< Employee[]> {
    const url = `${this.apiURL}/empsByName/${nom}`;
    return this.http.get<Employee[]>(url);
    }

 
}

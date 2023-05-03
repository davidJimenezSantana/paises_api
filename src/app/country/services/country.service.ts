import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable, catchError } from "rxjs";
import { Countrie } from "../interfaces/countries.interfaces";

@Injectable({
    providedIn: "root"
})
export class countrieService{

    //Para hacer peticiones http
    constructor(private http: HttpClient){};

    //api que se usa
    private apiUrl:string = "https://restcountries.com/v3.1"

    //buscar por pais
    buscarPais( busqueda: string):Observable<Countrie[]>{

        const url = this.apiUrl + '/name/' + busqueda;

        return this.http.get<Countrie[]>(url)
    }

}
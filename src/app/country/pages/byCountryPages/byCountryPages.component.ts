import { Component } from "@angular/core";
import { countrieService } from '../../services/country.service';
import { Countrie } from "../../interfaces/countries.interfaces";

@Component({
    selector: 'byCountry-component',
    templateUrl: 'byCountryPages.component.html',
    styleUrls: [
        'byCountryPages.component.css'
    ]
})
export class byCountryComponent {

    public countries: Countrie[]= [];

    constructor(private countrieServ: countrieService) {}

    buscar(valor: string) {
        this.countrieServ.buscarPais(valor)
            .subscribe(countrie => {
                this.countries = countrie;
            })
        console.log(this.countries)
    }
}
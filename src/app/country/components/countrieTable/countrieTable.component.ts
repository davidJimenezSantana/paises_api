import { Component, Input } from "@angular/core";
import { Countrie } from "../../interfaces/countries.interfaces";

@Component({
    selector:'countrie-table',
    templateUrl: 'countrieTable.component.html',
    styleUrls:[
        'countrieTable.component.css'
    ]
})
export class countrieTableComponent{

    @Input()
    public countries : Countrie[] = [];
}
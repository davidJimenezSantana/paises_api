import { NgModule } from "@angular/core";
import { byCapitalComponent } from "./pages/byCapitalPages/byCapitalPages.component";
import { byCountryComponent } from "./pages/byCountryPages/byCountryPages.component";
import { byRegionComponent } from "./pages/byRegionPages/byRegionPages.component";
import { countryPagesComponent } from "./pages/countryPages/countryPages.component";
import { countryRoutingModule } from "./countryRouting.module";
import { CommonModule } from "@angular/common";
import { sharedModule } from "../shared/shared.module";
import { countrieTableComponent } from "./components/countrieTable/countrieTable.component";

@NgModule({
    declarations:[
        byCapitalComponent,
        byCountryComponent,
        byRegionComponent,
        countryPagesComponent,
        countrieTableComponent
    ],
    imports:[
        countryRoutingModule,
        CommonModule, 
        sharedModule 
    ]
})
export class countryModule{
    
}
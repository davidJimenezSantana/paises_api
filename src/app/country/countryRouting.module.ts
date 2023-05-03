import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { byCapitalComponent } from './pages/byCapitalPages/byCapitalPages.component';
import { byCountryComponent } from './pages/byCountryPages/byCountryPages.component';
import { byRegionComponent } from './pages/byRegionPages/byRegionPages.component';
import { countryPagesComponent } from './pages/countryPages/countryPages.component';

const r: Routes = [
    {
        path: 'byCapital',
        component: byCapitalComponent
    },
    {
        path: 'byCountry',
        component: byCountryComponent
    },
    {
        path: 'byRegion',
        component: byRegionComponent
    },
    {
        path: 'by/:id',
        component: countryPagesComponent
    },
    {
        path: '**',
        redirectTo: 'byCountry'
    }
]


@NgModule({
    imports:[
        RouterModule.forChild(r)
    ],
    exports:[
        RouterModule
    ]
})
export class countryRoutingModule{

}
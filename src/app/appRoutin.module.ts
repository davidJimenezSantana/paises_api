import { aboutPagesComponent } from './shared/pages/aboutPages/aboutPages.component';
import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { homePagesComponent } from "./shared/pages/homepage/homePages.component";
import { contactPagesComponent } from './shared/pages/contactPages/contactPages.component';
import { countryModule } from './country/country.module';

const route: Routes =[
    {
        path: 'home',
        component: homePagesComponent
    },
    {
        path: 'about',
        component: aboutPagesComponent
    },
    {
        path: 'contact',
        component: contactPagesComponent
    },
    {
        path: 'country',
        loadChildren: () => import("./country/country.module").then(module=>module.countryModule)
    },
    {
        path: '**',
        redirectTo: 'home'
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(route)
    ],
    exports:[
        RouterModule
    ]
})
export class appRoutngModule{

}
import { aboutPagesComponent } from './shared/pages/aboutPages/aboutPages.component';
import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { homePagesComponent } from "./shared/pages/homepage/homePages.component";

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
        path: '**',
        component: homePagesComponent
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
import { NgModule } from "@angular/core";
import { homePagesComponent } from "./pages/homepage/homePages.component";
import { aboutPagesComponent } from "./pages/aboutPages/aboutPages.component";
import { sidebarComponent } from "./components/sidebar/sidebar.component";
import { appRoutngModule } from "../appRoutin.module";
import { Router, RouterModule } from "@angular/router";

@NgModule({
    declarations:[
        homePagesComponent,
        aboutPagesComponent,
        sidebarComponent
    ],
    exports:[
        homePagesComponent,
        aboutPagesComponent,
        sidebarComponent,        
    ],
    imports:[
        appRoutngModule,
        RouterModule
    ]
})
export class sharedModule{

}
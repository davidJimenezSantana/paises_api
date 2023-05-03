import { NgModule } from "@angular/core";
import { homePagesComponent } from "./pages/homepage/homePages.component";
import { aboutPagesComponent } from "./pages/aboutPages/aboutPages.component";
import { sidebarComponent } from "./components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { contactPagesComponent } from "./pages/contactPages/contactPages.component";
import { searchBoxComponent } from "./components/searchBox/searchBox.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        homePagesComponent,
        aboutPagesComponent,
        contactPagesComponent,
        sidebarComponent,
        searchBoxComponent
    ],
    exports:[
        homePagesComponent,
        aboutPagesComponent,
        contactPagesComponent,
        sidebarComponent,  
        searchBoxComponent              
    ],
    imports:[
        CommonModule,
        RouterModule,
    ]
})
export class sharedModule{

}
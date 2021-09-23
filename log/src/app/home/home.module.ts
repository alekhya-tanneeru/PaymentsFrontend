import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRouteModule } from "./home.route.module";

@NgModule({
    imports:[HomeRouteModule],
    declarations:[
        HomeComponent
    ]
})
export class HomeModule{}
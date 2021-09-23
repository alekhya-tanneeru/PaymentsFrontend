import { NgModule } from "@angular/core";
import { LoginRouteModule } from "./login.route.module";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
@NgModule({
    imports:[
        LoginRouteModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule
    ],
    declarations:[
        LoginComponent
    ]
})
export class LoginModule{
    

}
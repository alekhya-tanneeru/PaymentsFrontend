import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { ClientSecurityService } from "./client-security.service";

@Injectable(
)
export class AuthInterceptor implements HttpInterceptor{
    constructor(private auth:AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var userData=this.auth.userInfo.getValue();

        const newreq=req.clone({
            headers:req.headers.set("Authorization",`Bearer ${userData.access_token}`)
        })
     return next.handle(req);
    }
}
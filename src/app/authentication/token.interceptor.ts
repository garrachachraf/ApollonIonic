import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import { AuthenticationService } from './authentication.service';
import {AppSettings} from "../shared/appSettings";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authService = this.injector.get(AuthenticationService)
         if(request.url.startsWith(AppSettings.API_ENDPOINT)){
        if(authService.getToken()){
            request = request.clone({
                setHeaders: {
                    Authorization: `${authService.getToken().token}`
                }
            });
        }}
        console.log(request);
        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                request.headers.keys()
                console.log(event);
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    console.log("you are not logged in");

                  //  authService.logout();

                    //authService.isAuthenticated(false);

                }
            }
        });
    }
}


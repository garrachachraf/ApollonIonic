import { User } from './../shared/model/user.module';
import { HttpClient } from '@angular/common/http';
import { SubjectSubscriber } from 'rxjs/Subject';
import { AppSettings } from '../shared/appSettings';
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";
import 'rxjs/add/operator/map';
import { Subject }    from 'rxjs/Subject';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
    private headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    public isAuth : boolean;
    public myUSer : any;

    private userSource = new Subject<any>();
    private isAuthenticatedSource = new Subject<boolean>();
    // Observable  streams
    user$ = this.userSource.asObservable();
    isAuthenticated$ = this.isAuthenticatedSource.asObservable();

    constructor(private http: HttpClient) {
    }

    login(userCredentials : any) {
        let body = new URLSearchParams();
        body.set('login', userCredentials.username);
        body.set('password', userCredentials.password);
        return this.http.post(AppSettings.API_ENDPOINT + 'users/login', body.toString(), { headers: this.headers,observe: 'response' })
            .map(response => {
                let token = response.headers.get("Authorization");
                let user:any = response.body;

                if (user && token) {
                    console.log();
                    user.token = token;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }
                console.log(user);
                this.isAuthenticated(true);
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.isAuthenticated(false);
        this.saveUser(null);
    }

    getToken() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            return currentUser;
        }
    }

    isAuthenticated(isAuthenticated: boolean) {
        this.isAuthenticatedSource.next(isAuthenticated);
        this.isAuth = isAuthenticated;
    }

    saveUser(user: any) {
        this.userSource.next(user);
        this.myUSer = user;
    }

    // Checks if the current token is valid
    checkToken(){
        return this.http.post(AppSettings.API_ENDPOINT + 'users/check',null,{responseType : 'text'})
    }
}

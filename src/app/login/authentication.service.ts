import {Injectable} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Router} from "@angular/router";
import {appConfig} from "../app-config";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/internal/operators";

@Injectable()
export class AuthenticationService {
    private isLoggedin = false;
    private user;
    private SID;

    private baseUrl = appConfig.pathPort + appConfig.pathUrl;

    constructor(private http: HttpClient,
                private router: Router) {
    }

    login(username: string, password: string) {
        let headers = new HttpHeaders();
        headers = headers.append('Access-Control-Allow-Origin', '*');
        headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        headers = headers.append('Accept', 'application/json');

        const mainUrl = this.baseUrl + 'user/login/' + username + '/' + password + '/-360';
        return this.http.get<any>(mainUrl, {headers: headers})
            .pipe(map((res: any) => {
                if (res && res.operationCode === 0) {
                    this.SID = res.SID;
                    localStorage.setItem('isLoggedin', 'true');
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, SID: this.SID }));
                    return true;
                } else {
                    return res.message;
                }
            }));
    }

    public handleError(error: any): Promise<any> {
        console.error('An error occurred: ', error);
        return Promise.reject(error.body || error);
    }
}

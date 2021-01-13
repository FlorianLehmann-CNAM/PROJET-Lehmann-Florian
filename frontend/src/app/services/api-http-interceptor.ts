import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { Observable, of, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NewJwt, SignOutUser } from '../store/actions/User.action';
import { UserState } from '../store/states/User.state';



@Injectable()
export class ApiHttpInterceptor implements HttpInterceptor{
    
    token : string = "";

    constructor(private store: Store){
        this.store.select(UserState.GetLoggedToken).subscribe(jwt => {
            this.token = jwt;
            console.log("jwt modifié: ", jwt);
        })
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        req = req.clone({
            setHeaders: {
                'Authorization': "Bearer" + this.token
            },
        });

        return next.handle(req);
      
    }
}
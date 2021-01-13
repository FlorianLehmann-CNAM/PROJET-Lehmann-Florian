import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Product } from '../models/Product';
import { UserLoginQueryModel } from '../models/query/UserLoginQueryModel';
import { User } from '../models/User';
import { NewJwt } from '../store/actions/User.action';

@Injectable({
    providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient, private store: Store) { }

  getProductData() : Observable<Product[]>{
    return this.http.get<Product[]>(environment.baseUrl + "/products");
  }

  registerUser(user : User) : Observable<User>{
    return this.http.post<User>(environment.baseUrl + "/user/register", JSON.stringify(user));
  }

  loginUser(login : string, password: string) : Observable<any>{
      return this.http.get<UserLoginQueryModel>(environment.baseUrl + "/user/login", {observe: 'response', responseType: 'json', params: {login, password}})
      .pipe(
          map(res =>{
            let bearer = res.headers.get('Authorization');
            let jwt = bearer.split('Bearer')[1];
            this.store.dispatch(new NewJwt(jwt));
            return res.body;
          })
      )

  }


  getProductById(id : number) : Observable<Product>{
      return this.http.get<Product>(environment.baseUrl + "/products/" + id);
  }


}
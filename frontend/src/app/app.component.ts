import { Component, VERSION } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from './models/User';
import { UserState } from './store/states/User.state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    name = 'Angular ' + VERSION.major;
    
    isLogged$ : Observable<Boolean>;

    constructor(private store: Store){}

    ngOnInit(){
        this.isLogged$ = this.store.select(UserState.IsLogged)
    }

    getUserId(){
        console.log("getUserId");
        return this.store.select(UserState.GetId);
    }
}

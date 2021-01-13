import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserState } from 'src/app/store/states/User.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


    user$ : Observable<User>;

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.user$ = this.store.select(UserState.GetUser);
    }

}

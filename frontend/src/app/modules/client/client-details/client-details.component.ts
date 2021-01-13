import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { UserState } from 'src/app/store/states/User.state';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {


    user: Observable<User>;

  constructor(private store: Store) { }

  ngOnInit(): void {
        this.user = this.store.select(UserState.GetUser);
  }

}

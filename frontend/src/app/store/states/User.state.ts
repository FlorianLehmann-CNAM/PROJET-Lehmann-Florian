import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from 'src/app/models/User';
import { UserStateModel } from 'src/app/models/UserStateModel';
import { NewJwt, SignInUser, SignOutUser } from '../actions/User.action';

@State<UserStateModel>({
    name: 'user',
    defaults: {
        isLogged: false,
        user: null,
        token: ""
    }
})
@Injectable()
export class UserState{


    @Selector()
    static GetUser(state: UserStateModel) : User{
        return state.user;
    }

    @Selector()
    static IsLogged(state: UserStateModel) : Boolean{
        return state.isLogged;
    }

    @Selector()
    static GetLoggedToken(state: UserStateModel) : string{
        return state.token;
    }

    @Selector()
    static GetId(state: UserStateModel) : number{
        return state.user.id;
    }

    @Action(SignInUser)
    signIn({getState, patchState} : StateContext<UserStateModel>, {payload} : SignInUser){
        patchState({
            isLogged: true,
            user: payload
        });
    }

    @Action(SignOutUser)
    signOut({getState, patchState} : StateContext<UserStateModel>, {} : SignOutUser){
    
        patchState({
            isLogged: false,
            user: null,
            token: ""
        });
    }
    @Action(NewJwt)
    newJwt({getState, patchState} : StateContext<UserStateModel>, {payload} : NewJwt){
        console.log("New JWT: ", payload);
        patchState({
            token: payload
        });
    }
}
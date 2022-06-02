import {defineStore} from "pinia";
import UserState from "./UserState";

export const useUserStore = defineStore('user', {
    state: () => ({userState: new UserState()}),
    actions: {
        setRole(role: string){
            this.userState.setUserRole(role);
        }
    },
    getters: {
        isAdmin: state => state.userState.isUserAdmin(),
        isLoggedIn: state => state.userState.isUserLoggedIn(),
        getRole: state => state.userState.getUserRole()
    }
});
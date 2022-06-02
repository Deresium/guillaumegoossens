import {useUserStore} from "./store/user/userStore";

export default class DecryptCookie{
    public async tryLoginUser(){
        if(this.existsKey('payload')){
            const payload = this.getCookie('payload');
            const decryptPayload = JSON.parse(atob(payload.split('.')[1]));
            const userStore = useUserStore();
            userStore.setRole(decryptPayload.role);
        }
    }

    private existsKey(key: string): boolean{
        const cookies = document.cookie;
        return cookies.split('; ').find(cookie => cookie.startsWith(key)) !== undefined;
    }

    private getCookie(key: string): string {
        const cookies = document.cookie;
        const cookie = cookies.split('; ').find(cookie => cookie.startsWith(key));
        if(cookie)
            return cookie;
        return '';
    }
}
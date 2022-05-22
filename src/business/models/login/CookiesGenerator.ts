import cookie from "cookie";
import jwt from "jsonwebtoken";

export default class CookiesGenerator{
    private readonly userId: number;
    private readonly userRole: string;
    private signatureCookie: string;
    private payloadCookie: string;

    constructor(userId?: number, userRole?: string) {
        if(userId && userRole) {
            this.userId = userId;
            this.userRole = userRole;
            this.generateAuthenticationCookies();
        }else {
            this.deleteAuthenticationCookies();
        }
    }

    public getSignatureCookie(){
        return this.signatureCookie;
    }

    public getPayloadCookie(){
        return this.payloadCookie;
    }

    private generateSignatureCookie(value: string, deleteCookie = false): string{
        return cookie.serialize('signature', value, {
            secure: process.env.NODE_ENV === 'production',
            httpOnly: true,
            maxAge: deleteCookie? 0: 60*60*24,
            sameSite: true,
            path: '/'
        });
    }

    private generatePayloadCookie(value: string, deleteCookie = false): string{
        return cookie.serialize('payload', value, {
            secure: process.env.NODE_ENV === 'production',
            maxAge: deleteCookie? 0: 60*60*24,
            sameSite: true,
            path:'/'
        });
    }

    private generateAuthenticationCookies(): void {
        const token = jwt.sign({userId: this.userId, role: this.userRole}, process.env.JWT_SECRET,{expiresIn: 60*60*24}).split('.');
        const signatureCookieValue = token[2];
        const payloadCookieValue = `${token[0]}.${token[1]}`;
        this.signatureCookie = this.generateSignatureCookie(signatureCookieValue);
        this.payloadCookie = this.generatePayloadCookie(payloadCookieValue);
    }

    private deleteAuthenticationCookies(): void {
        this.signatureCookie = this.generateSignatureCookie('', true);
        this.payloadCookie = this.generatePayloadCookie('', true);
    }
}
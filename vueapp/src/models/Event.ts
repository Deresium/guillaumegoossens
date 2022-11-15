import * as http from "http";

export default class Event{
    private readonly eventId: number;
    private readonly type: string;
    private readonly date: string;
    private readonly label: string;
    private readonly description: string;
    private readonly street: string;
    private readonly zipCode: string;
    private readonly town: string;
    private readonly website: string;
    private readonly picture: boolean;
    private readonly favorite: boolean;
    private readonly showEvent: boolean;

    constructor(eventId: number, type: string, date: string, label: string, description: string, street: string, zipCode: string, town: string, website: string, picture: boolean, favorite: boolean, showEvent: boolean) {
        this.eventId = eventId;
        this.type = type;
        this.date = date;
        this.label = label;
        this.description = description;
        this.street = street;
        this.zipCode = zipCode;
        this.town = town;
        this.website = website;
        this.picture = picture;
        this.favorite = favorite;
        this.showEvent = showEvent;
    }

    public getEventId(){
        return this.eventId;
    }

    public getType(){
        return this.type;
    }

    public getDate(){
        return this.date;
    }

    public getDescription(){
        return this.description;
    }

    public affichDescription(){
        if(this.description){
            return this.description;
        }
        return "Aucune description";
    }

    public getLabel(){
        return this.label;
    }

    public affichLabel(){
        if(this.label){
            return this.label;
        }
        return "Aucun nom";
    }

    public getStreet(){
        return this.street;
    }

    public getZipCode(){
        return this.zipCode;
    }

    public getTown(){
        return this.town;
    }

    public affichAddress(){
        if(this.type === 'CONCERT' && this.street && this.zipCode && this.town){
            return `${this.street} ${this.zipCode} - ${this.town}`
        }
        return ''
    }

    public getWebsite(){
        return this.website;
    }

    public getWebsiteWithoutProtocol(){
        if(!this.website){
            return '';
        }
        const regex = /(https|http):\/\//;
        return this.website.replace(regex, '');
    }

    public getPicture(){
        return this.picture;
    }

    public getFavorite(){
        return this.favorite;
    }

    public affichFavorite(): string {
        if (this.favorite)
            return 'Oui';
        return 'Non';
    }


    public getShowEvent(){
        return this.showEvent;
    }

    public affichShowEvent(): string{
        if(this.showEvent)
            return 'Oui';
        return 'Non';
    }
}
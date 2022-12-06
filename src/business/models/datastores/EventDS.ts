export default class EventDS{
    private readonly eventId: number;
    private readonly type: string;
    private readonly date: Date;
    private readonly label: string;
    private readonly description: string;
    private readonly street: string;
    private readonly zipCode: string;
    private readonly town: string;
    private readonly website: string;
    private readonly picture: boolean;
    private readonly favorite: boolean;
    private readonly showEvent: boolean;
    private readonly websiteText: string;

    constructor(eventId: number, type: string, date: Date, label: string, description: string, street: string, zipCode: string, town: string,
                website: string, picture: boolean, favorite: boolean, showEvent: boolean, websiteText: string) {
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
        this.websiteText = websiteText;
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

    public getLabel(){
        return this.label;
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

    public getWebsite(){
        return this.website;
    }

    public getPicture(){
        return this.picture;
    }

    public getFavorite(){
        return this.favorite;
    }

    public getShowEvent(){
        return this.showEvent;
    }

    public getWebsiteText(){
        return this.websiteText;
    }
}
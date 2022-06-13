export default class PictureDS{
    private readonly pictureId: number;
    private readonly order: number;

    constructor(pictureId: number, order: number) {
        this.pictureId = pictureId;
        this.order = order;
    }

    public getPictureId(){
        return this.pictureId;
    }

    public getOrder(){
        return this.order;
    }
}
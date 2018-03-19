
export class Shape {
    constructor(){
        this.width = 0;
        this.height= 0;
        this.x = 0;
        this.y = 0;
    }

    get getWidth() {
        return this.width;
    }

    setPosition (x, y){
        this.x = x;
        this.y = y;
    }

    getPosition () {
        return {
            x:this.x,
            y:this.y}
    }
};
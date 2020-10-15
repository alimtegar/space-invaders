class Bullet {
    constructor(x, y, w = 2, h = 8){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    update(){
        this.y -= 10;
    }

    draw(ctx){
        ctx.fillStyle = "#fff";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    isOutOfBounds(){
        return this.y < 0;
    }
}
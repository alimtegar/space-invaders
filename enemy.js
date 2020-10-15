class Enemy {
    constructor(x, y, w = 30, h = 20){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.dir = 1;
        this.moveCountX = 0;
        this.imageIndex = 0
    }

    update(){
        this.moveCountX++;
        if(this.moveCountX === 24){
            this.dir *= -1;
            this.moveCountX = 0;
            this.y += 30;
        }else{
            this.x += 15 * this.dir;
        }
        this.imageIndex++;
        if(this.imageIndex === 2){
            this.imageIndex = 0;
        }
    }

    draw(ctx){
        // ctx.fillStyle = "red";
        // ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.drawImage(sprite, this.imageIndex * 115, 0, 110, 80, this.x, this.y, this.w, this.h);
    }

    isCollide(obj){
        return (
            (
                obj.x + obj.w > this.x && //top-right A > top-left B
                obj.y + obj.h > this.y && //bottom-left A > top-left B
                obj.x + obj.w < this.x + this.w && //top-right A < top-left B
                obj.y + obj.h < this.y + this.h //bottom-left A < top-left B
            ) ||
            (
                obj.x  > this.x &&
                obj.y + obj.h > this.y &&
                obj.x  < this.x + this.h &&
                obj.y + obj.h < this.y + this.h
            ) ||
            (
                obj.x > this.x &&
                obj.y > this.y &&
                obj.x < this.x + this.w &&
                obj.y < this.y + this.h
            ) ||
            (
                obj.x + obj.w > this.x &&
                obj.y > this.y &&
                obj.x + obj.w < this.x + this.w &&
                obj.y < this.y + this.h
            )
        );
    }
}
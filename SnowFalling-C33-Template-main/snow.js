class Snow{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
this.body = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;
this.image= loadImage("snow4.webp")
this.visiblity = 255;
this.visiblity = this.x;
this.visiblity = this.body.position.x;
        World.add(world, this.body);}
    }

    display () {

        var pos= this.body.position;
        imageMode(CENTER);

    
}
}
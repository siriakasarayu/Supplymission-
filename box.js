class Box {
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h)
        this.width = w
        this.height = h

    World.add(engine.world,this.body)
    }
    display() {
        rectMode(CENTER)
        push()
        rectMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        fill("red")
        rect(0,0,this.width,this.height)
        pop()
    }
}
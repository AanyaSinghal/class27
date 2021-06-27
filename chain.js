class Chain{
    constructor(a,b){
        var options={
            bodyA:a,
            bodyB:b,
            stiffnes:2,
            length:200
        }
        this.chain=Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}
class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 0.01
        }
        this.sling1 = loadImage('sprites/sling1 - resortera1.png');
        this.sling2 = loadImage('sprites/sling2 - resortera 2.png');
        this.sling3 = loadImage('sprites/sling3 - resortera 3.png');

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("#54270F");
            line(pointA.x-20, pointA.y, pointB.x, pointB.y)
            line(pointA.x-20, pointA.y, pointB.x-30, pointB.y-5)
            image(this.sling3, pointA.x-20, pointA.y-8);
        }
    }
    
}

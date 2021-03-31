class slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB= pointB;
        this.SngShot=Constraint.create(options)
        World.add(world,this.SngShot)
    }
    fly(){
        this.SngShot.bodyA=null;

    }
    display(){
        if(this.SngShot.bodyA){
        var pointA = this.SngShot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4); 

        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}
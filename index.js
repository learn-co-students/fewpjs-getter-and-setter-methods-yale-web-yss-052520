// Add your Circle class here

class Circle {
    constructor (radius) {
        this.radius = radius
        this.pi = Math.PI
    }
    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return this.radius * 2 * this.pi
    }
    get area(){
        return this.radius * this.radius * this.pi
    }

    set diameter(d){
        this.radius = d / 2
    }
    set circumference(c){
        this.radius = c / this.pi / 2
    }
    set area(a){
        this.radius = Math.sqrt((a / this.pi))
    }

}
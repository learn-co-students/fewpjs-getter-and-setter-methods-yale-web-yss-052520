// Add your Circle class here

class Circle {
    constructor(radius){
        this.radius = radius 
    }

    get diameter() {
        this._diameter = this.radius * 2
    } 

    set diameter(number) {
        this.raidus = number / 2
    }

    get circumference() {
        this._circumference = Math.PI * this.diameter   
    }

    set circumference(number) {
        this.radius = number / (2 * Math.PI) 
    }

    get area() {
        this.area = Math.PI * (this.raidus**2)
    }

    set area(number) {
        this.raidus = Math.sqrt(number / Math.PI)
    }
}
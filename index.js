// Add your Circle class here

class Circle {
    constructor(r) {
        this.radius = r
    }
    get diameter() {
        return 2*this.radius
    }
    get circumference() {
        return this.diameter*Math.PI
    }
    get area() {
        return Math.PI*(this.radius**2)
    }
    set diameter(d) {
        this.radius = d/2
    }
    set area(a) {
        this.radius = Math.sqrt(a/Math.PI)
    }
    set circumference(c) {
        this.radius = (c/Math.PI)/2
    }
}
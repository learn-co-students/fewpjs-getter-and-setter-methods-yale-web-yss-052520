class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return 2 * this.radius
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    get area() {
        return this.radius**2 * Math.PI
    }

    set diameter(diameter) {
        this.radius = diameter / 2 
    }

    set circumference(circ) {
        let diam = circ / Math.PI
        this.diameter = diam 
    }

    set area(area) {
        this.radius = Math.sqrt(area / Math.PI)
    }
}
// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        this.radius = diameter / 2.0
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    set circumference(circumference) {
        this.radius = circumference / (2 * Math.PI)
    }

    get area() {
        return (this.radius ** 2) * Math.PI
    }

    set area(area) {
        this.radius = area / (Math.PI ** 2)
    }

}
class Circle{
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(new_diameter){
        this.radius = new_diameter/2;
    }

    get circumference(){
        return 2 * Math.PI * this.radius;
    }

    set circumference(new_circumference){
        this.radius = new_circumference/(2 * Math.PI);
    }

    get area(){
        return Math.PI * this.radius ** 2;
    }

    set area(new_area){
        this.radius = (new_area/Math.PI) ** (0.5)
    }
}
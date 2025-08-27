
class Vehicle {
    constructor(brand, model, year, color, price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }
    showDetails() {
        console.log(`Vehicle Details -> Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`);
    }
}
let v1 = new Vehicle("Toyota", "Innova", 2020, "White", 2000000);
let v2 = new Vehicle("Honda", "City", 2019, "Black", 1200000);
let v3 = new Vehicle("Tesla", "Model S", 2022, "Red", 7000000);
let v4 = new Vehicle("Ford", "Endeavour", 2018, "Grey", 2500000);
let v5 = new Vehicle("Suzuki", "Swift", 2021, "Blue", 800000);

v1.showDetails();
v2.showDetails();
v3.showDetails();
v4.showDetails();
v5.showDetails();

class College {
    constructor(name, location, courses, strength) {
        this.name = name;
        this.location = location;
        this.courses = courses;
        this.strength = strength;
    }
    display() {
        console.log(`College Details -> Name: ${this.name}, Location: ${this.location}, Courses: ${this.courses}, Strength: ${this.strength}`);
    }
}

let c1 = new College("IIT Bombay", "Mumbai", "Engineering, Science", 10000);
let c2 = new College("Pune University", "Pune", "Arts, Commerce, Science", 30000);
let c3 = new College("Symbiosis", "Pune", "Management, Law", 15000);
let c4 = new College("MIT College", "Aurangabad", "Engineering", 8000);

c1.display();
c2.display();
c3.display();
c4.display();
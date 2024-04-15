class Person {
    constructor(name, age, distance, duration) {
        this.name = name;
        this.age = age;
        this.distance = distance;
        this.duration = duration;
    }
}

class UberPriceCalculator {
    static BASE_FARE = 2.0;
    static PER_MILE_RATE = 1.5;
    static PER_MINUTE_RATE = 0.2;
    static MIN_FARE = 5.0;

    constructor(person) {
        this.person = person;
    }

    calculatePrice() {
        let fare = UberPriceCalculator.BASE_FARE + (this.person.distance * UberPriceCalculator.PER_MILE_RATE) + (this.person.duration * UberPriceCalculator.PER_MINUTE_RATE);
        return Math.max(fare, UberPriceCalculator.MIN_FARE);
    }
}

// Example Usage
let john = new Person("John", 30, 10, 20); // John is 30 years old, traveling 10 miles in 20 minutes
let priceCalculator = new UberPriceCalculator(john);
console.log(priceCalculator.calculatePrice()); // Calculate Uber price for John's ride

class Car {
    name: string;
    acceleration: number= 0;
    constructor(name: string) {
        this.name = name;
        
    }
    honk() {
        console.log(` ${this.name} is saying: Toooooooooot!`);
    }
    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

let car1 = new Car("BMW");
car1.honk(); // BMW is saying: Toooooooooot!
console.log(car1.acceleration); // 0
car1.accelerate(60);
console.log(car1.acceleration); 
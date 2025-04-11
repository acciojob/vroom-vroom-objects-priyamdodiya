// Complete the js code
class Car{
	constructor(make, model){
			this.make=make;
			this.model=model;
	}
}

Car.prototype.getMakeModel = function() {
	return `${this.make} ${this.model}`;
}

class SportsCar extends Car{
	constructor(make, model, topSpeed) {
		super(make,model);
		this.topSpeed = topSpeed;
	}
} 

SportsCar.prototype.getTopSpeed = function() {
	return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

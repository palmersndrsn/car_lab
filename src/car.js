function car(make,model,year,color){
	this.make = make;
	this.model = model;
	this.year = year;
	this.state = "off";
	this.color = color;
	this.previousOwners = [];
	this.currentOwner = "Manufacturer";
	this.passangers = []
};

car.prototype.sale = function(newOwner){
	this.previousOwners.push(this.currentOwner)
	this.currentOwner = newOwner;
};
car.prototype.paint = function(newColor){
	this.color = newColor;
};
car.prototype.start = function(){
	this.state = "on";
};
car.prototype.off = function(){
	this.state = "off";
};
car.prototype.driveTo = function(destination){
	if (this.state === "on") {
		console.log("Driving to ",destination);
	};
};
car.prototype.park = function(){
	if (this.state === "off") {
		console.log('Parked!!');
	};
};
car.prototype.pickUp = function(passName) {
	if (this.state === "on") {
		console.log("Driving to pick up ",passName);
		this.passangers.push(passName)
	}
};
car.prototype.dropOff = function(passDrop) {
	if (this.state === "on") {
		console.log("Driving to drop off ",passDrop);	
		var passIndex = this.passangers.indexOf(passDrop)
		if (passIndex !== -1) {
			this.passangers.splice(passIndex, 1);
		};
	};
};

module.exports = car
console.log('tamagotchi file is loaded');

//your constructor function here
var Tamagotchi = function(name, creatureType) {
	this.name = name;
	this.creatureType = creatureType;
	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.cry = function() {
		this.foodInTummy--;
		console.log('WAHH!!!');
		console.log(this.name + ' has ' + this.foodInTummy + ' food in tummy.');	
	};
};

//create new Tamagotchis
var ann = new Tamagotchi('Ann', 'mamagatchi');
var bob = new Tamagotchi('Bob', 'papagatchi');

//test out your Tamagotchies below via console.logs
console.log(ann);
console.log(bob);
ann.cry();
bob.cry();

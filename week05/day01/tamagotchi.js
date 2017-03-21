console.log('tamagotchi file is loaded');

//your constructor function here
var Tamagotchi = function(name) {
	this.name = name;
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
var ann = new Tamagotchi('Ann');
var bob = new Tamagotchi('Bob');

//test out your Tamagotchies below via console.logs
ann.cry();
bob.cry();

var Faker = {};
process.mixin(this, require('./utils/module_utils'));

var LETTERS	= this.k('a b c d e f g h i j k l m n o p q r s t u v w x y z');

Faker.numerify = function(number_string){
	return number_string.split("").map(function(v){
		if(v == "#") return NumberUtils.rand(10).toString();
		return v;	
	}).join("");
}
 
Faker.letterify = function(letter_string){
	return letter_string.split("").map(function(v){
		if(v == "?") return LETTERS.rand();
		return v;	
	}).join("");
}
 
Faker.bothify = function(string){
    return Faker.letterify(Faker.numerify(string))
}

process.mixin(this, Faker)
var Faker = require("./vendor/fakerjs/faker");

var methods = ["numerify", "letterify", "bothify"]

_.each(Faker, function(func, key){ 
	_.each(methods, function(val){
		if(val == key) exports[key] = func;
	})
})   

        
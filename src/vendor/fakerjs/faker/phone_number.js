var Faker = require('./main');

var PhoneNumber = {};
process.mixin(this, require('./utils/module_utils'));

var PHONE_FORMATS = this.k(['###-###-#### x#####','###-###-#### x####','###-###-#### x###','###-###-####','###.###.#### x#####','###.###.#### x####','###.###.#### x###','###.###.####','(###)###-#### x#####','(###)###-#### x####','(###)###-#### x###','(###)###-####','1-###-###-#### x#####','1-###-###-#### x####','1-###-###-#### x###','1-###-###-####'])

PhoneNumber.phone_number = function(){
	return Faker.numerify(PHONE_FORMATS.rand()); 
}

PhoneNumber.short_phone_number = function(){
	return Faker.numerify('###-###-####')	
}

process.mixin(this, PhoneNumber);
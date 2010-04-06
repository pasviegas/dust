var Faker = require("./vendor/fakerjs/faker");

this.zip_code = function(){
	return Faker.Address.zip_code()
}
this.us_state = function(){
	return Faker.Address.us_state()
}
this.us_state_abbr = function(){
	return Faker.Address.us_state_abbr()
}
this.city_prefix = function(){
	return Faker.Address.city_prefix()
}
this.city_suffix = function(){
	return Faker.Address.city_suffix()
}
this.city = function(){
	return Faker.Address.city()
}
this.street_suffix = function(){
	return Faker.Address.street_suffix()
}
this.street_name = function(){
	return Faker.Address.street_name()
}
this.street_address = function(){
	return Faker.Address.street_address()
}
this.secondary_address = function(){
	return Faker.Address.secondary_address()
}
this.uk_county = function(){
	return Faker.Address.uk_county()
}
this.uk_country = function(){
	return Faker.Address.uk_country()
}
this.uk_postcode = function(){
	return Faker.Address.uk_postcode()
}
this.company_name = function(){
	return Faker.Company.name()
}
this.suffix = function(){
	return Faker.Company.suffix()
}
this.catch_phrase = function(){
	return Faker.Company.catch_phrase()
}
this.company_bs = function(){
	return Faker.Company.bs()
}
this.email = function(){
	return Faker.Internet.email()
}
this.free_email = function(){
	return Faker.Internet.free_email()
}
this.user_name = function(){
	return Faker.Internet.user_name()
}
this.domain_name = function(){
	return Faker.Internet.domain_name()
}
this.domain_word = function(){
	return Faker.Internet.domain_word()
}
this.domain_suffix = function(){
	return Faker.Internet.domain_suffix()
}
this.words = function(){
	return Faker.Lorem.words()
}
this.sentence = function(){
	return Faker.Lorem.sentence()
}
this.sentences = function(){
	return Faker.Lorem.sentences()
}
this.paragraph = function(){
	return Faker.Lorem.paragraph()
}
this.paragraphs = function(){
	return Faker.Lorem.paragraphs()
}
this.name = function(){
	return Faker.Name.name()
}
this.first_name = function(){
	return Faker.Name.first_name()
}
this.last_name = function(){
	return Faker.Name.last_name()
}
this.name_prefix = function(){
	return Faker.Name.prefix()
}
this.name_suffix = function(){
	return Faker.Name.suffix()
}
this.short_phone_number = function(){
	return Faker.PhoneNumber.short_phone_number()
}
this.phone_number = function(){
	return Faker.PhoneNumber.phone_number()
}
# fakerjs

A port of Data:Faker based on FFaker (http://github.com/emmanueloga/faker) from EmmanuelOga (http://github.com/EmmanuelOga)

## Examples

	var Faker = require("./faker")
	         
	Faker.Address.street_address(true); // "1824 Bartell Cove"       
	Faker.Name.name(); // "Dr. Serenity Krajcik"
	Faker.Company.name(); // "Powlowski Shanahan"                         
	Faker.PhoneNumber.short_phone_number(); // "903-118-0356"         
	Faker.Lorem.sentence(5); // "Consequatur alias aut perferendis sit voluptatem accusantium dolorem que aperiam."
	Faker.Internet.free_email(); // "candida.brakus@gmail.com"     	

## Modules

  - Address
  - Company
  - Internet
  - Lorem
  - Name
  - Phone Number

## TODO

There is much to do yet, this is just a sketch
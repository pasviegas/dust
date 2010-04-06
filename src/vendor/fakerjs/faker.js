require("./faker/utils/number_utils");
require("./faker/utils/array_utils");
require("./faker/utils/string_utils");

var Faker = require("./faker/main");

Faker.Address		=	require('./faker/address');
Faker.Company		=	require('./faker/company');
Faker.Internet		=	require('./faker/internet');
Faker.Lorem			=	require('./faker/lorem');
Faker.Name			=	require('./faker/name');
Faker.PhoneNumber	=	require('./faker/phone_number');
Faker.VERSION 		=	require('./faker/version');

process.mixin(this, Faker);
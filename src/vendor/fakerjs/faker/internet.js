var Company = require('./company');
var Name = require('./name');

var Internet = {};
process.mixin(this, require('./utils/module_utils'));
Internet.k = this.k;
 
var HOSTS 			= this.k("gmail.com yahoo.com hotmail.com")
var DOMAIN_SUFFIXES = this.k("co.uk com us uk ca biz info name")

Internet.email = function(name){
	return [ Internet.user_name(name), Internet.domain_name() ].join('@')
}
 
Internet.free_email = function(name){
	return [ Internet.user_name(name), HOSTS.rand() ].join('@')
}
 
Internet.user_name = function(name){
	if(name) return ArrayUtils.shuffle(name.split("\s")).join(this.k(". _").rand()).toLowerCase();
	var r = NumberUtils.rand(2);
	if(r == 0) return Name.first_name().replace(/\W/g, '').toLowerCase();
	if(r == 1) return [ Name.first_name(), Name.last_name() ].map(function(v){return v.replace(/\W/g, '')}).join(this.k(". _").rand()).toLowerCase();
}
 
Internet.domain_name = function(){
	return [ Internet.domain_word(), Internet.domain_suffix() ].join('.')	
}
 
Internet.domain_word = function(){
	return Company.name().split(' ')[0].replace(/\W/g, '').toLowerCase();
}
 
Internet.domain_suffix = function(){
	return DOMAIN_SUFFIXES.rand();	
}

process.mixin(this, Internet);
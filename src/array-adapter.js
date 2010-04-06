var module	= require('./module'),
	Class	= require("./vendor/classjs/lib/class").Class;

var ArrayAdapter = new Class({
	constructor: function(){
		this.docs = new Array();
	},
	push: function(el){
		return this.docs.push(el)
	},
	remove: function(number, o){
		var out = new Array(), offset = 0, many = 0;
		_.each(this.docs, function(d, i){
			if(number && many == number) _.breakLoop();
			if(this.exists(d, o)) {
				out.push(i)
				many++;
			};
		}, this)
		_.each(out, function(v){
			this.docs = module.remove(this.docs, v - offset++);
		}, this)
	},
	forEach: function(){
		this.docs.forEach.apply(this.docs, arguments);
	},
	find: function(o){ 
		if(!o) return this.docs;
		return _.select(this.docs, function(d){
			return this.exists(d, o)
		}, this)	
	},
	exists: function(d, o){
		return _.select(d, function(val, key){return o[key] && o[key] == val;}).length > 0
	},
})

exports.ArrayAdapter = ArrayAdapter;
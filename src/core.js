require("./vendor/underscore/underscore");

var module			= require('./module'),
	Class			= require("./vendor/classjs/lib/class").Class;
	ArrayAdapter	= require("./array-adapter").ArrayAdapter;

var Document = new Class({
	constructor: function(name, model){
		var adapter = dust.adapter();
		this.name	= name;
		this.model	= module.simplify(model)
		this.body	= new adapter(name, dust.setting("dbpath"))
		dust[name]	= this;
	},
	add: function(number, o, callback){
		if(!o) this.body.push(this.fake(number), callback);
		else if(number == 1) this.body.push(this.fake(o), callback);
		else for(var i = 0;i < number;i++) this.body.push(this.fake(o), callback);
	},
	remove: function(){
		this.body.remove.apply(this.body, arguments);
	},
	find: function(){
		return this.body.find.apply(this.body, arguments);
	},
	fake: function(o){
		var faked = {};
		_.each(this.model, function(val, key){
			if(o && o[key]){ faked[key] = o[key];}
			else{
				if(val.length == 3) faked[key] = dust.helpers[val[2]].call(dust.helpers, dust.types[val[0]].call(dust.helpers, val[1]));
				else faked[key] = dust.types[val[0]].call(dust.helpers, val[1]);
			}
		})
		return faked;
	}
})

var Dust = new Class({
	constructor: function(){
		this.helpers	= require("./helpers"),
		this.types		= require("./types");		
		this.settings 	= {};
		this.setting("dbpath", "./store");
	},
	setting: function(key, val){
		if(val) this.settings[key] = val;
		return this.settings[key];
	},
	use: function(name, func){
		this.types[name] = func;
	},
	adapter: function(adapter){
		if(adapter) this.connector = adapter;
		return this.connector || ArrayAdapter;
	}, 
	helper: function(name, func){
		this.helpers[name] = func;
	},	
	Document: function(name, model){
		return new Document(name, model)
	},
});

var dust = exports.dust = new Dust();
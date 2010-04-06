Dust
==========

The cleanest way to fill your database
	
Usage
==========
    
Require and add a document. The first argument is the name of the document, the other is and object with the specification of the type, the parameter for the type function and the helper function

	var dust = require("../lib/dust").dust;

	dust.Document(
		"posts",	{
			title	: { type: "words", helper:"flatten" },
			name	: ["name"],
			email	: "email",
			post	: ["paragraphs", 5, 'flatten']
		}
	)

You can add types, the scope of the function is the helper object, so you can call any helper function from inside

	dust.use("id", function(mask){
		return this.numerify(mask || "#####")
	})
	
You can also add helpers

	dust.helper("capitalize", function(string){
    	return string.charAt(0).toUpperCase() + string.substring(1);
	})	

Same scope rule

	dust.helper("flatten", function(words){
		return this.capitalize(words.join(" "));
	})

Thats how you add 3 documents

	dust.posts.add(3);   
	
You can default any attribute

	dust.posts.add(1, {name: 'Rob'});
	
Thats the result

	[ { title: 'In consequatur aut'
  	  , name: 'Rob'
  	  , email: 'gage_pagac@ratke.us'
  	  , post: 'Ut consequatur aut perferendis sit voluptatem accusantium dolorem. Itaque consequatur aut perferendis. Fugit consequatur aut perferendis. Consequatur consequatur aut perferendis. Voluptatum consequatur aut perferendis sit. Tempora consequatur aut perferendis sit. Perferendis consequatur aut alias sit voluptatem. Nobis consequatur aut 			perferendis sit voluptatem accusantium. Voluptatem consequatur aut perferendis. Et consequatur aut perferendis.'
  		}
	]
		
	
Same goes to remove, the first removes any 3 documents, the second, 1 document named Rob and the third removes all documents with name John 	
	
	dust.posts.remove(3);	
	dust.posts.remove(1, {name: 'Rob'});	
	dust.posts.remove(1, {name: 'John'});	
	
Finding documents
	
	dust.posts.find() 				//all documents
	dust.posts.find({name: 'Rob'}) 	//only docs named Rob
	
It stores in an array, but its easy to change that
	
	var FileAdapter = new Class({
		constructor: function(name, path){},
		push: function(el, callback){},
		remove: function(number, o, callback){}
		find: function(o, callback){ }
	})
	
	dust.adapter(FileAdapter)

You can also set the path of the db, if any

	this.setting("dbpath", "./store");	
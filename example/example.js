var dust = require("../lib/dust").dust,
	sys = require('sys');

dust.use("id", function(mask){
	return this.numerify(mask || "#####")
})
  
dust.helper("flatten", function(words){
	return this.capitalize(words.join(" "));
})

dust.helper("capitalize", function(string){
    return string.charAt(0).toUpperCase() + string.substring(1);
})

dust.Document(
	"posts",	{
		title	: { type: "words", helper:"flatten" },
		name	: ["name"],
		email	: ["email"],
		post	: ["paragraphs", 5, 'flatten']
	}
)
dust.Document(
	"comments",	{
		title	: ["words",1,"flatten"],
		name	: "name",
		email	: "email",
		idpost	: ["id", "##"],
		post	: { type: "paragraphs",param: 2, helper: 'flatten' }	
	}
) 

dust.comments.add(3, {name: "Pedro"});   
dust.comments.add({name: "Joao"});   

dust.comments.remove(2, {name: "Pedro"});

sys.p(dust.comments.find());


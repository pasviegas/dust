var Lorem = {};
process.mixin(this, require('./utils/module_utils'));
var WORDS	= this.k("alias consequatur aut perferendis sit voluptatem accusantium dolorem que aperiam eaque ipsa quae ab illo inventore veritatiset quasi architecto beatae vitae dicta sunt explicabo aspernaturaut odit aut fugit sed quia consequuntur magni dolores eos quiratione voluptatem sequi nesciunt neque dolorem ipsum quia dolorsit amet consectetur adipisci velit sed quia non numquam eiusmodi tempora incidunt ut labore et dolore magnam aliquam quaeratvoluptatem ut enim ad minima veniam quis nostrum exercitationemullam corporis nemo enim ipsam voluptatem quia voluptas sitsuscipit laboriosam nisi ut aliquid ex ea commodi consequaturquis autem vel eum iure reprehenderit qui in ea voluptate velitesse quam nihil molestiae et iusto odio dignissimos ducimus quiblanditiis praesentium laudantium totam rem voluptatum delenitiatque corrupti quos dolores et quas molestias excepturi sintoccaecati cupiditate non provident sed ut perspiciatis undeomnis iste natus error similique sunt in culpa qui officiadeserunt mollitia animi id est laborum et dolorum fuga et harumquidem rerum facilis est et expedita distinctio nam liberotempore cum soluta nobis est eligendi optio cumque nihil impeditquo porro quisquam est qui minus id quod maxime placeat facerepossimus omnis voluptas assumenda est omnis dolor repellendustemporibus autem quibusdam et aut consequatur vel illum quidolorem eum fugiat quo voluptas nulla pariatur at vero eos etaccusamus officiis debitis aut rerum necessitatibus saepeeveniet ut et voluptates repudiandae sint et molestiae nonrecusandae itaque earum rerum hic tenetur a sapiente delectus utaut reiciendis voluptatibus maiores doloribus asperioresrepellat");

Lorem.words = function(num){
	return WORDS.random_pick(num || 3);
}
 
Lorem.sentence = function (word_count){
	return StringUtils.capitalize(Lorem.words((word_count || 4) + NumberUtils.rand(6)).join(' ')).concat(".");
}

Lorem.sentences = function(sentence_count){
	var i =0, ar = new Array(sentence_count || 3);
	while(i < ar.length) ar[i++] = Lorem.sentence();
	return ar;
}
 
Lorem.paragraph = function(sentence_count){
	return Lorem.sentences((sentence_count || 3) + NumberUtils.rand(3)).join(' ');
}
 
Lorem.paragraphs = function(paragraph_count){
	var i = 0, ar = new Array(paragraph_count || 3);
	while(i < ar.length) ar[i++] = Lorem.paragraph();
	return ar;
}


process.mixin(this, Lorem);
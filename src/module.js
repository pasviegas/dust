var simplifyAttr = function(model){
	if(_.isString(model)) return [model];
	if(_.isArray(model)) return model;
	var ar = new Array();
	ar.push(model.type)
	ar.push(model.param)
	ar.push(model.helper)
	return ar;
};                       

exports.simplify = function(model){
	_.each(model, function(val, key){
		model[key] = simplifyAttr(val)
	})
	return model
};

exports.remove = function(array, i){
	var rest = array.slice(i + 1 || array.length);
	array.length = i < 0 ? array.length + i : i;
	array.push.apply(array, rest);
	return array;	
}
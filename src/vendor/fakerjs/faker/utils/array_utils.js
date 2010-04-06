var ArrayUtils = {};

ArrayUtils.const_array = function(argument){
	var array = ArrayUtils.isArray(argument) ? argument : argument.split(" ");
	process.mixin(array, ArrayUtils.prototype);
	return array;
}
 
ArrayUtils.random_pick = function(array, n){	
	return array.slice(0)
			.map(function(v, i){return i;})
			.sort(function(){return NumberUtils.rand();})
			.slice(0, n)
			.map(function(v){return array[v];})
}
 
ArrayUtils.rand = function(array){
	return array[NumberUtils.rand(array.length)];
}
 
ArrayUtils.shuffle = function(array){
	return array.sort(function(){
		return NumberUtils.rand();
	});
}

ArrayUtils.isArray = function(obj){
	return !!(obj && obj.concat && obj.unshift);
}
 
ArrayUtils.prototype = {
	random_pick: function(n){
		return ArrayUtils.random_pick(this, n)
	},
 	rand: function(){
		return ArrayUtils.rand(this)
	},
	shuffle: function(){
		return ArrayUtils.shuffle(this)
	}
}

process.mixin(GLOBAL, {ArrayUtils: ArrayUtils});
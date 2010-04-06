var NumberUtils = {};

NumberUtils.rand = function(max){
	return Math.floor(Math.random() * max);
}

process.mixin(GLOBAL, {NumberUtils: NumberUtils});
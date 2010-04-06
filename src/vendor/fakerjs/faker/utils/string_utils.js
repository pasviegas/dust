var StringUtils = {};

StringUtils.capitalize = function(w){
	return w.charAt(0).toUpperCase() + w.substring(1, w.length);
}

process.mixin(GLOBAL, {StringUtils: StringUtils});
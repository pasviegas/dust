var ModuleUtils = {};

ModuleUtils.k = function(arg){
	return ArrayUtils.const_array(arg)
}   

process.mixin(this, ModuleUtils);
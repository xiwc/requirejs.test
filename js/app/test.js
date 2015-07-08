define(function(require) {
    var sub = require('app/sub');
    var url = require.toUrl('app/sub');

    return {
        test: 'test',
        func:function(){
        	console.log('test');
        	return this;
        }
    };
});

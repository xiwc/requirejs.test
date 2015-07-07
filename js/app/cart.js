//my/shirt.js now does setup work
//before returning its module definition.
define(function () {
    //Do setup work here

    return {
        add:function(sub){
        	console.log('add:' + sub);
        }
    }
});

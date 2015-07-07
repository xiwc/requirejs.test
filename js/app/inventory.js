//my/shirt.js now does setup work
//before returning its module definition.
define(function() {
    //Do setup work here

    return {
        decrement: function(sub) {
            console.log('decrement:' + sub);
        }
    }
});

define(function(require, exports, module) {

        var a = require('app/test').func();

        //Return the module value
        return function () {
        	console.log(a.test);
        };
    }
);
requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app'
    },
    waitSeconds: 15,
    shim: {
        'backbone': {
            //These script dependencies should be loaded before loading
            //backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the
            //module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'foo': {
            deps: ['bar'],
            exports: 'Foo',
            init: function(bar) {
                //Using a function allows you to call noConflict for
                //libraries that support it, and do other cleanup.
                //However, plugins for those libraries may still want
                //a global. "this" for the function will be the global
                //object. The dependencies will be passed in as
                //function arguments. If this function returns a value,
                //then that value is used as the module export value
                //instead of the object found via the 'exports' string.
                //Note: jQuery registers as an AMD module via define(),
                //so this will not work for jQuery. See notes section
                //below for an approach for jQuery.
                return this.Foo.noConflict();
            }
        }
    }
});

// Start the main app logic.
// requirejs(['jquery', 'app/sub'],
//     function($, sub) {
//         console.log($);
//         console.log(sub);
//         sub.addToCart();
//         //jQuery, canvas and the app/sub module are all
//         //loaded and can be used here now.
// });

// requirejs(['app/test'], function(test){
//     console.log(test.test);
// });

// require() in callback function
// requirejs(['app/test1'], function(test){
//     console.log(test());
// });

//循环依赖
// requirejs(['app/a.b'], function(test) {
//     console.log(test.ab);
// });


// requirejs(["http://localhost/test/jsonp/obj?callback=define"],
//     function(data) {
//         //The data object will be the API response for the
//         //JSONP data call.
//         console.log(data);
//     }
// );

//requirejs(["app/shim"]);

requirejs(["foo"]);
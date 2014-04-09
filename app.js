require.config({
    paths: {
        'angular':        '//ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular',
        'angular-cookies':'//ajax.googleapis.com/ajax/libs/angularjs/1.2.14/angular-cookies',
        'auth-angular':   'lib/auth0-angular',
        'domReady': 	  'lib/requirejs-domready/domReady',
        // we can't include the widget file here - if we include it here
        // 'auth-widget':    'lib/auth0-widget-3.0.8'
    },
    shim: {
        "angular":{
            exports:'angular'
            },
        "angular-cookies":{
            deps:['angular']
            },
        "auth-angular":{
            deps:['angular','angular-cookies']
            }
    }
});

define(
	[
    'angular',
    'angular-cookies',
    // 'auth-widget',
    'auth-angular'
	],
	function (angular) {
        angular.module('app', [ 'ngCookies','auth0','authInterceptor' ])
        .config(function(authProvider) {
            authProvider.init({
                domain: 'contoso.auth0.com',
                clientID: 'DyG9nCwIEofSy66QM3oo5xU6NFs3TmvT',
                callbackURL: document.location.href
            })
        })
        .controller('DemoController',function($scope,auth) {
            $scope.activateLoginWidget=function() {
                auth.signin()
                }
        })
		require(['domReady!'], function (document) {
            angular.bootstrap(document, ['app']);
		});
	}
)


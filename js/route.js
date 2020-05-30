
angular.module('myapp', ['ngRoute']).config(['$routeProvider',function($routeProvider)
{
$routeProvider
.when('/', {
 templateUrl: 'home.html',
 
})
.when('/services', {
    templateUrl: 'services.html',
   
   })
   .when('/portfolio', {
    templateUrl: 'portfolio.html',
    
   })
   .when('/payment-terms', {
    templateUrl: 'payment-terms.html',
    
   })
   .when('/contact-us', {
    templateUrl: 'contact-us.html',
    
   })
.otherwise({
 redirectTo: '/'
}); 
}]); 
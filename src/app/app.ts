
import "./home/index";
import { RouteConfig } from "./config/router.config";
// import { AppConfig } from './config/app.config';

angular.module("myApp", [
    'pascalprecht.translate',
    "ui.router",
    "myApp.home"
]);

angular.module("myApp").config(["$stateProvider", "$urlRouterProvider", ($stateProvider, $urlRouterProvider) => {
    return new RouteConfig($stateProvider, $urlRouterProvider)
}])
// .constant('ENV', ENV)
// .config(['ENV', (ENV: IEnv) => {
//     return new AppConfig(ENV);
// }])
.config(["$translateProvider", ($translateProvider) => {

$translateProvider.translations('en', {
    "GraphViewErrorMessage" : "Unable to fetch graph data. please try again...",
    "OntologyErrorMessage" : "Unable to fetch ontologies. please try again...",
    "OwlValidationMessage" : "Only .owl files are allowed...",
    "FileUploadSuccessMessage" : "File uploaded successfully...",
    "FileUploadFailureMessage" : "Unable to upload file. Please try again.."
  });

  $translateProvider.translations('el', {
    "GraphViewErrorMessage" : "",
    "OntologyErrorMessage" : "",
    "OwlValidationMessage" : "",
    "FileUploadSuccessMessage" : "",
    "FileUploadFailureMessage" : ""
  });
   $translateProvider.preferredLanguage('en');
   var fallbackLanguage = 'en';
   //var language = $cookies.get('LSLanguage');
   //$translateProvider.preferredLanguage(language);
   $translateProvider.fallbackLanguage(fallbackLanguage);
   $translateProvider.useSanitizeValueStrategy('escaped');
}])
// .service('CustomInterceptor', CustomInterceptor)
// .config(['$httpProvider', (httpProvider: ng.IHttpProvider) => {
//     httpProvider.interceptors.push('CustomInterceptor')
// }])
.config(['$provide', ($provide) => {
    $provide.decorator("$exceptionHandler", ["$delegate", ($delegate) => {
        return function (exception, cause) {
            console.log({message: "Exception", reason: exception}); 
            $delegate(exception, cause);
        };
    }]);
}])

import "./services/index";

angular.bootstrap(document,
    ["myApp"], {
        strictDi: true
    });

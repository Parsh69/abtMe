angular.module("myWebApp")
    .config(RoutesConfig);

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"]

function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home')

    $stateProvider
        .state('home', {

            url: '/home',
            templateUrl: 'src/templates/home.html'

        })
        .state('mLAndAI', {

            url: '/machineLearningAndAI',
            templateUrl: 'src/templates/MLandAI.html',
            controller: 'MLController as mlCtrl',
            resolve: {
                loadImg: ['CertificateService', function(CertificateService) {
                    console.log('Running')
                    return CertificateService.explicitTransitionPause();

                }]
            }

        })
        .state('webDev', {

            url: '/webAppsDevelopment',
            templateUrl: 'src/templates/webDev.html',
            controller: 'webDevController as webCtrl'

        })
        .state('certificate', {
            url: '/certificate',
            templateUrl: 'src/templates/certificate.html',
            controller: 'CertificateController as cCtrl'
        });
}

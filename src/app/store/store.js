angular.module( 'ngBoilerplate.store', [
    'ui.router',
    'restangular',
    'base64'
])

.config(function config( $stateProvider, $base64, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://api.cashcreators.honeycombits.com');

    RestangularProvider.setDefaultHeaders({
        'Authorization': 'Basic ' + $base64.encode('usr:psr')
    });

    $stateProvider.state( 'storenew', {
        url: '/store/new',
        views: {
            "main": {
                controller: 'StoreCtrl',
                templateUrl: 'store/new.tpl.html'
            }
        },
        data:{ pageTitle: 'New store' }
    });
})

.controller( 'StoreCtrl', function ( $scope, Restangular ) {

    $scope.save = function(store) {

        var stores = Restangular.all('stores/create');

        stores.post({
            data: store
        }).then(function (response) {
            $scope.response = response;
        });

    };

})

;


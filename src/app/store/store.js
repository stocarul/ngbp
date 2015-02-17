angular.module( 'ngBoilerplate.store', [
    'ui.router'
])

.config(function config( $stateProvider ) {
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

.controller( 'StoreCtrl', function StoreController( $scope ) {

    $scope.save = function(store) {
        console.log(store);
    };

})

;


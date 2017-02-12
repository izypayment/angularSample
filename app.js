var app = angular.module('myStore', []);
app.controller('PaymentController', function($scope, $http) {
    var _endPoint = 'https://www.izypayment.com/api/v1'

    //build payment object
    $scope.payment = {
        amount: 100,
        description: 'Description du paiement',
        lang: 'fr'
    }


    //pay function to be called by form
    $scope.pay = function() {
        $scope.isLoading   = true
        $scope.showMessage = false

        return $http({
            method: 'POST',
            url: _endPoint + '/pay',
            data: $scope.payment,
            headers: {
                key: 'my-application-key' //<-- application key here
            }
        })
        .then(function(response) { //payment successfull
            $scope.isLoading   = false
            $scope.showMessage = true
            $scope.data = response.data
            console.log(response)
        },
        function(error) { //payment error
            $scope.isLoading = false
            console.log(error)
        })
    }

    //check if controller is running
    console.log('Controller running...');
})

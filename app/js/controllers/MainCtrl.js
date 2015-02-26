app.controller('MainCtrl', function ($scope, $rootScope, $location, User){

    // Setup Alerts
    $scope.alerts = [];
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    // Initial Functions
    $scope.InitPage = function() {
        $scope.PageTitle = "App Security";
        $scope.UserID = User;
    };

    // AuthService.IsAdmin().then(function(result){
    //     $scope.isAdmin = result;
    // });

    // AuthService.JobInput().then(function(result){
    //     $scope.jobInput = result;
    // });

});


app.controller('DocumentationViewCtrl', function ($scope, $timeout, $state, $q, AutoDocumentationService){

    $scope.InitPage = function(){
        $scope.GetDocumentationData();
        $scope.saving = false;
        $scope.showLoader = true;
        console.log("works");
    };

    $scope.alerts = [];
    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };

    $scope.GetDocumentationData = function() {
        return AutoDocumentationService.Documentation().then(function(result) {
            if(result.MessageType === 'error'){
                $scope.alerts.push({msg: result.Message, type:'error', autoclose: true, autoclosetime: 3000, showClose: false});
            } else {

                $scope.list = result;
                console.log('$scope.list :', $scope.list);

            }
            $scope.showLoader = false;
        });

    };


    $scope.ShowAppDetails = function(item) {
        $scope.appDetails = item;
    };








});
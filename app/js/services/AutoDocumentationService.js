app.factory('AutoDocumentationService', function($q, AppSecurityWebAPI, User) {
    var list;

    var _GetDocumentation = function(data) {
        var self = this;
        // var UserID = User;
        var deferred = $q.defer();
        // var AuthData = { AppName: 'HammcoJobListing', UserName: UserID};
        var results = AppSecurityWebAPI.all('AutoDocumentation').getList().then(function(result){

        var list = [];
        var objCache;

        var newObject = {
                "ID": "",
                "App": "",
                "Active": "",
                "Icon": "",
                "SubTitle": "",
                "Title": "",
                "Url": "",
                "ADGroup": [
                  {"Name": "", "Role": ""}
                ]
            };

        angular.forEach(result, function(value, key){
          var newObj = angular.copy(newObject);
              newObj.ID = value.ID;
              newObj.App = value.App;
              newObj.Active = value.Active;
              newObj.Icon = value.Icon;
              newObj.SubTitle = value.SubTitle;
              newObj.Title = value.Title;
              newObj.Url = value.Url;

          if(objCache && objCache.App === value.App) {
              objCache.ADGroup.push({Name:value.ADGroup, Role: value.Role });
          }

          else {
              newObj.ADGroup[0].Name = value.ADGroup;
              newObj.ADGroup[0].Role = value.Role;
              list.push(newObj);
              objCache = newObj;
          }

        });
            deferred.resolve(list);
        });
        return deferred.promise;
    };


    return {
        Documentation: _GetDocumentation
    };
});
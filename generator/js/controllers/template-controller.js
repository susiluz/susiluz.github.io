'use strict';

app.controller('TemplateController', ['$scope', '$templateCache', 'TemplateService', function ($scope, $templateCache, TemplateService) {
    var scopeProperties = {
        options: [
            {name: 'INFORMACION'},
            {name: 'MODELO 1'},
            {name: 'MODELO 2'}
        ],
        selectedTemplate: 'MODELO 1',
        emailInfo : TemplateService.getDefaultInfo(),
        pictures: TemplateService.getPictures()
    };
    angular.extend($scope, scopeProperties);


    $scope.turnOnOffElement = function(element){
        element.active = element.active ? false : true;
    }

    $scope.showTemplate = function(name){
        $scope.selectedTemplate = name;
    };

    $scope.selectPicture = function(picture, element){
        if($scope.emailInfo.picture2 === '' && $scope.emailInfo.picture2.url !== picture.url){
            $scope.emailInfo.picture3.url = picture.url;
        }
        else{ 
            element.url = picture.url;
        }
    };

    $scope.addTextItem = function(element){
        var auxItem = {
            text: ''
        };
        element.items.push(auxItem);
    };

    $scope.removeTextItem = function(index, element){
        element.items.splice(index,1);
    };

    function selectAll() {
        var e = document.getElementById('customEmail');
        var r = document.createRange();
        r.selectNodeContents(e);
        var s = window.getSelection();
        s.removeAllRanges();
        s.addRange(r);
    }

    $scope.copyEmail = function(){
        selectAll();
        document.execCommand('copy');
    };



    function init() {
    }

    init();

}]);

/**
 * Created by nath on 22/12/2013.
 */

angular.module('skillsApp', ['skillServices'])

    .controller('SkillsListController', ['$scope','skillSet', function ($scope, skillSet) {

        skillSet.getAllRatings().then(function(ratings){
            $scope.Ratings = ratings;
        });

    }]);


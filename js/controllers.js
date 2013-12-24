/**
 * Created by nath on 22/12/2013.
 */

var skillsApp = angular.module('skillsApp', ['jaydata']);

skillsApp.controller('SkillsListController', function ($scope, $data) {

    $scope.SkillRatings = [];

    $data.initService('http://localhost:52999').then(function (service) {

        $scope.service = service;

        $scope.SkillRatings = service.SkillRatings.toLiveArray();

    });


})


/**
 * Created by nath on 24/12/13.
 */

angular.module('skillServices', ['jaydata'])

    .factory('skillSet', ['$data', '$q', function ($data, $q) {
        var service = {
            getAllRatings: function () {
                var deferred = $q.defer();
                $data.initService('http://localhost:52999').then(function (service) {
                    service.SkillRatings.toArray().then(function (stuff) {
                        deferred.resolve(stuff);
                    });
                });
                return deferred.promise;

            }}
        return service;
    }]);
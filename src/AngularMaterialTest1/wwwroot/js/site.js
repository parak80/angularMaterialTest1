angular
module()
var items = angular.module('items', []);
var text = angular.module('text', []);
var app = angular.module('app', ['items', 'text']);

//items.controller('SearchCtrl', function ($scope) {
//    $scope.user = {
//        name: ''
//    }
//    $scope.lastName = {
//        lastName: ''
//    }
//});

items.controller('SearchCtrl', function ($scope) {
    $scope.title1 = 'Button';
});

text.controller('SelectCtrl', function ($scope) {
    $scope.text.items = [parti1, parti2, parti3, parti4];
    $scope.selectedItem;
    $scope.getSelectedText = function () {
        if ($scope.selectedItem !== undefined) {
            return $scope.selectedItem;
        } else {
            return "Please select an item";
        }
    };
});

app.controller('SelectCheckBCtrl', function ($scope) {

    $scope.data = {};
    $scope.data.cb1 = false;
    $scope.isChecked = function () {
        return $scope.selected.length === $scope.items.length;
    };
});

(function () {
    'use strict';
    angular
        .module('autocompleteDemo', ['ngMaterial'])
        .controller('DemoCtrl', DemoCtrl);

    function DemoCtrl($timeout, $q, $log) {
        var self = this;

        self.simulateQuery = false;
        self.isDisabled = false;

        // list of `state` value/display objects
        self.states = loadAll();
        self.querySearch = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange = searchTextChange;

        self.newState = newState;

        function newState(state) {
            alert("Sorry! You'll need to create a Constitution for " + state + " first!");
        }

        function querySearch(query) {
            var results = query ? self.states.filter(createFilterFor(query)) : self.states,
                deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }

        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }

        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }
        function loadAll() {
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

            return allStates.split(/, +/g).map(function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

      
        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
                return state.value.indexOf(lowercaseQuery) === 0;
            };

        }
    }
})();
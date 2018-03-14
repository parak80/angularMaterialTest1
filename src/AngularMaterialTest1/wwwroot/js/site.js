angular.module('myApp', ['ngMaterial'])

	.controller('ListBottomSheetCtrl', function ($scope) {
	    $scope.data =
            [{
                title: 'Home',
                icon: 'home',
                link: '/page1/'
            }, {
                title: 'Email Us',
                icon: 'envelope',
                link: '/page2/'
            }, {
                title: 'Profile',
                icon: 'user',
                link: '/page3/'
            }, {
                title: 'Print',
                icon: 'print',
                link: '/page4/'
            }];

	    $scope.open1 = false; //initial value
	    $scope.open2 = false; //initial value
	    $scope.open3 = false; //initial value
	    $scope.open4 = false; //initial value

	    $scope.toggle = function (itemPos) {
	        if ($scope.menuIsOpen === itemPos) {
	            $scope.menuIsOpen = 0;
	            // $scope.class = "fa-chevron-down rotate180";
	        }
	        else {
	            $scope.menuIsOpen = itemPos;
	            // $scope.class = "fa-chevron-down";
	        }
	    }


	})

//angular.module('myApp', ['ngMaterial'])
//var search = angular.module('searchCtrl', []);
//var selectP = angular.module('Select1Ctrl', []);
//var selectNS = angular.module('selectNS', []);
//var selectB = angular.module('selectB', []);
//var selectCheckbox = angular.module('SelectCheckBCtrl', []);
//var auto = angular.module('DemoCtrl', []);
//var app = angular.module('myApp', ['search', 'selectP', 'selectNS', 'selectB', 'SelectCheckBCtrl', 'DemoCtrl']);

//search.controller('SearchCtrl', function ($scope) {
//    $scope.user = {
//        name: ''
//    }
//    $scope.lastName = {
//        lastName: ''
//    }
//});

//.controller('SearchCtrl', function ($scope) {
//    $scope.title1 = 'Button';
//});
var app= angular.module('myApp', []);
    app.controller('SelectCtrl1', function ($scope) {
        $scope.items = [1, 2, 3, 4, 5, 6, 7];
        $scope.selectedItem;
        $scope.getSelectedText = function () {
            if ($scope.selectedItem !== undefined) {
                return "You have selected: Item " + $scope.selectedItem;
            } else {
                return "Please select an item";
            }
        };
    });

    var app = angular.module('myApp', [ngMaterial]);
    app.controller('SelectCheckBCtrl', function ($scope) {
        $scope.data = {};
        $scope.data.cb1 = false;
        //$scope.isChecked = function () {
        //    return $scope.selected.length === $scope.items.length;
        //};
    });
    

//(function () {
//    'use strict';
//        auto.controller('DemoCtrl', DemoCtrl);

//    function DemoCtrl($timeout, $q, $log) {
//        var self = this;

//        self.simulateQuery = false;
//        self.isDisabled = false;
        
//        // list of `state` value/display objects
//        self.states = loadAll();
//        self.querySearch = querySearch;
//        self.selectedItemChange = selectedItemChange;
//        self.searchTextChange = searchTextChange;

//        self.newState = newState;

//        function newState(state) {
//            alert("Sorry! You'll need to create a Constitution for " + state + " first!");
//        }

//        function querySearch(query) {
//            var results = query ? self.states.filter(createFilterFor(query)) : self.states,
//                deferred;
//            if (self.simulateQuery) {
//                deferred = $q.defer();
//                $timeout(function () { deferred.resolve(results); }, Math.random() * 1000, false);
//                return deferred.promise;
//            } else {
//                return results;
//            }
//        }

//        function searchTextChange(text) {
//            $log.info('Text changed to ' + text);
//        }

//        function selectedItemChange(item) {
//            $log.info('Item changed to ' + JSON.stringify(item));
//        }
//        function loadAll() {
//            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
//              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
//              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
//              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
//              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
//              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
//              Wisconsin, Wyoming';

//            return allStates.split(/, +/g).map(function (state) {
//                return {
//                    value: state.toLowerCase(),
//                    display: state
//                };
//            });
//        }

      
//        /**
//         * Create filter function for a query string
//         */
//        function createFilterFor(query) {
//            var lowercaseQuery = angular.lowercase(query);

//            return function filterFn(state) {
//                return state.value.indexOf(lowercaseQuery) === 0;
//            };

//        }
//    }
//})();
'use strict';

//i think unit tests are for the default page config on page load
//while e2e are for testing pssible configs at runtime

/* jasmine specs for controllers go here */

// describe('controllers', function() {

//   it("should do something", function() {

//   });

// });


// describe('PhoneListCtrl', function(){
// 	var scope, ctrl;

// 	beforeEach(module('phonecatApp'));

// 	beforeEach(inject(function($controller){
// 		scope = {};
// 		ctrl = $controller('PhoneListCtrl', { $scope:scope });
// 	}));

// 	it('should create "phones" model with 3 phones', function() {
// 		expect(scope.phones.length).toBe(3);
// 	});

// 	it('should set the default value of orderProp model', function(){
// 		expect(scope.orderProp).toBe('age');
// 	});
// });

describe('PhoneCat controllers', function(){

describe('PhoneListCtrl', function(){
	var scope, ctrl, $httpBackend;

	//Load app module definition before each test.
	beforeEach(module('phonecatApp'));

	beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){
		$httpBackend = _$httpBackend_;
		$httpBackend.expectGET('phones/phone.json').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

		scope = $rootScope.$new();
		ctrl = $controller('PhoneListCtrl', {$scope: scope});

	}));

	it('should create "phones" model with 2 phones fetched from xhr', function(){
		expect(scope.phones).toBeUndefined();
		$httpBackend.flush();

		expect(scope.phones).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
	});

	it('should set the default value of orderProp model', function(){
		expect(scope.orderProp).toBe('age');
	});
});

});

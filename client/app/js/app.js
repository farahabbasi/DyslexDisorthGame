'use strict';


// Declare app level module which depends on filters, and services
angular.module('participantData', ['headphoneFilter', 'phophloServices']).
	config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/sessions', {templateUrl: 'partials/search_results.html',   controller: SessionListCtrl}).
		when('/sessions/:sessionID', {templateUrl: 'partials/session_report.html', controller: SessionReportCtrl}).
		when('/participants/:participantID', {templateUrl: 'partials/participant_report.html', controller: ParticipantReportCtrl}).
		otherwise({redirectTo: '/sessions'});
}]);

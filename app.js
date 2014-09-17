	// create the module and name it scotchApp
	var app = angular.module('nuSWE', ['ngRoute']);

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'home.html',
				//controller  : 'mainController'
			})
			
			// route for the bylaws page
			.when('/bylaws', {
				templateUrl : 'bylaws.html',
				controller  : 'bylawsController' // execController
			})
			
			// route for the exec page
			.when('/exec', {
				templateUrl : 'exec.html',
				controller  : 'mainController' // execController
			})

			// route for the events page
			.when('/events', {
				templateUrl : 'events.html',
				controller  : 'mainController' // eventsController
			})
			
			// route for the cdfg event page
			.when('/events/cdfg', {
				templateUrl : 'events/cdfg.html',
				controller  : 'mainController' // eventsController //'cdfgController'
			})
			
			.when('/events/iday', {
				templateUrl : 'events/iday.html',
				controller  : 'mainController'  // eventsController //'idayController'
			})
			
			.when('/events/banquet', {
				templateUrl : 'events/banquet.html',
				controller  : 'mainController'  //banquetController // eventsController // 'eventsController'
			})
			
			.when('/events/step', {
				templateUrl : 'events/step.html',
				controller  : 'mainController'  // eventsController //'stepController'
			});
	});
	
	
	
	

// separate controllers arent really necessary for this site
	// create the controller and inject Angular's $scope
	
	app.controller('bylawsController', function($scope){
	  /*
	  $scope.article1 = '<h4>Section 1 - Name</h4>'+'<p>The name of this organization is the SOCIETY OF WOMEN ENGINEERS hereinafter referred to as SWE or "the Society".</p>';
	  
	  $scope.article2 = '';
	  $scope.article3 = '';
	  $scope.article4 = '';
	  $scope.article5 = '';
	  $scope.article6 = '';
	  $scope.article7 = '';
	  
	 / Section 1 - SWE Advisor

Section 2 - SWE Counselor

The SWE Counselor of a Student Section is elected by the Student Section.
The Counselor is responsible to the Board of Directors, through the Student Activities Committee Chair, for the Student Section's compliance with these bylaws and with the policies of the Society.
The SWE Counselor must be a member in good standing of the Society.';
	  
	  $scope.article8 = 'This constitution may be amended by a majority vote, provided the amendment was proposed at least one meeting prior to the time of voting.';
*/
	})
	
	
	
	app.controller('mainController', function($scope) {
	  
		// create a message to display in our view
		//$scope.message = 'Everyone come and see how good I look!';
		
		$scope.date_step = 'June 16-18, 2014';
		$scope.date_stepAppDeadline = 'May 1, 2014';
		
		$scope.date_cdfg = 'Saturday, February 22, 2014';
		$scope.theme_cdfg = "Engineering: Design a Better World!";
		$scope.schedule_cdfg_link = ""; // link to the document
		
		$scope.date_iday = 'Thursday, October 16, 2014';
		
		
		
// --- Student of the Year Awards ---
//Outstanding Freshman: 
//Outstanding Sophomore: 
//Outstanding Junior: 
//Outstanding Senior: 
  
  // Year that the below students won these awards
  $scope.lastAwardYear = "2013";
  
  // --- Academic Acheivement ---
$scope.academic1 = "Molly Bird";
$scope.academic2 = "Rose Milavitz";
$scope.academic3 = "Hannah Teitelbaum";
$scope.academic4 = "Julianne Wagoner";
$scope.academic5 = "Kathleen Zhou";


// Outstanding/Student of the Year
$scope.soty_fresh = "Kathleen Zhou";
$scope.soty_soph = "Hannah Beck";
$scope.soty_jr = "Liz Nelson";
$scope.soty_sr = "Connie Poupard";

// --- Abbott Laboratories Outstanding Student Awards ---
//<h4>Abbott Laboratories Outstanding Student Awards</h4>
$scope.abbot1 = "Kelsey Berning";
$scope.abbot2 = "Rose Milavitz";



$scope.executiveBoard = [
{
title: "President",
urlTitle: "president",
genericEmail: "NUSWEPresident@gmail.com",
name: "Hannah Beck",
studentEmail: ""
},
{
title: "Internal Vice President",
urlTitle: "internal-vp",
genericEmail: "",
name: "Lauren Patras",
studentEmail: "laurenpatras2015@u.northwestern.edu"
},
{
title: "External Vice President",
urlTitle: "external-vp",
genericEmail: "",
name: "Kathleen Zhou",
studentEmail: "kathleenzhou2016@u.northwestern.edu"
},
{
title: "Co-Program Director",	
urlTitle: "co-program-director-a",
genericEmail: "",
name: "Taylor Riley",
studentEmail: "taylorriley@u.northwestern.edu"
},
{
title: "Co-Program Director",
urlTitle: "co-program-director-b",
genericEmail: "swe.IndustryDay.2014@gmail.com",
name: "Sara Smith",
studentEmail: "sarasmith2014@u.northwestern.edu"
},
{
title: "Program Chair",
urlTitle: "program-chair",
genericEmail: "",
name: "Michelle Wang",
studentEmail: "michellewang2017@u.northwestern.edu"
},
{
title: "Summer Program Chair",
urlTitle: "summer-program-chair",
genericEmail: "",
name: "Camaria Lehman",
studentEmail: "camarialehman@u.northwestern.edu"
},
{
title: "Outreach Director",
urlTitle: "outreach-director",
genericEmail: "",
name: "Jenni Antane",
studentEmail: "jenniferantane2016@u.northwestern.edu"
},
{
title: "Freshman Coordinator",
urlTitle: "freshman-coordinator",
genericEmail: "",
name: "Angela Hosbein",
studentEmail: "angelahosbein2017@u.northwestern.edu"
},
{
title: "Treasurer",
urlTitle: "treasurer",
genericEmail: "",
name: "Theresa Nave",		
studentEmail: "theresanave2014@u.northwestern.edu"
},
{
title: "Secretary",
urlTitle: "secretary",
genericEmail: "",
name: "Liz Nelson",	
studentEmail: "enelson@u.northwestern.edu"
},
{
title: "Social Chair",
urlTitle: "social-chair",
genericEmail: "",
name: "Anisha Ghosh",
studentEmail: "anishaghosh2017@u.northwestern.edu"
},
{
title: "Publicity Chair",
urlTitle: "publicity-chair",
genericEmail: "",
name: "Jesse Vega-Perkins",
studentEmail: "jessevegaperkins2017@u.northwestern.edu"
},
{
title: "Technology Director",
urlTitle: "tech-director",
genericEmail: "",
name: "Korri Hershenhouse",
studentEmail: "korrihershenhouse2017@u.northwestern.edu"
}
];
		
	});
	
	




// -----------------------------------------------------------------------------
//
// STEP Summer Program
//

	
	
// -----------------------------------------------------------------------------
//
// Industry Day
//



// -----------------------------------------------------------------------------
//
// .............
//
	
	
// -----------------------------------------------------------------------------
//
// Spring Banquet
//

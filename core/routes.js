angular.module('app').
  config(['$routeProvider',
    function config($routeProvider) {

      $routeProvider.
      	when('/home', {

          template: `
            <div class="pageWidth pageHeight outerContainer red">
              <div class='centerBox translucentGrey'>
               <label>Click below to enter the counter</label><br>
                  <a ng-href="#welcome"><button class="btn btn-primary btn-lg btn-block" ng-model="button" >New</button></a><br>

                  <a ng-href="#welcome"><button class="btn btn-danger btn-lg btn-block" ng-model="button" ng-disabled="checked">Continue</button></a>
              </div>
            </div>
          `,
          controller: 'HomeController',
          controllerAs: 'homeCtrl'

        }).
      	when('/welcome', {

          template: `
          <div class="pageWidth pageHeight outerContainer red">
          <button class="circle center" ng-click="count = count + 1" ng-init="count=0">
              Increment +1
              </button>
              <span>
              count: {{count}}
              </span>
          </div>
          `,
          controller: 'DashboardController',
          controllerAs: 'dashboardCtrl',
        }).
        otherwise('/home');
    }
  ]);

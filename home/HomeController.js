angular.module('app')

.controller('HomeController', ['UserService', '$cookies', function (userService, cookies) {

  this.userService = userService

  let storedName = cookies.get('userName')
  if(storedName !== undefined) {
    userService.name = storedName
  }

  this.rememberUserName = function () {
    cookies.put('userName', userService.name)
  }

}])

angular.module('employeeApp', [])
.controller('EmployeeController', function($scope) {
  $scope.sortKey = 'name';
  $scope.sortReverse = false;

  $scope.employees = [
    { name: 'Alice Johnson', department: 'HR', contact: 'alice@example.com', isManager: true },
    { name: 'Bob Smith', department: 'Engineering', contact: 'bob@example.com', isManager: false },
    { name: 'Carol Davis', department: 'Finance', contact: 'carol@example.com', isManager: true },
    { name: 'David Lee', department: 'Marketing', contact: 'david@example.com', isManager: false },
    { name: 'Eva Brown', department: 'Engineering', contact: 'eva@example.com', isManager: false },
    { name: 'Frank Wilson', department: 'Finance', contact: 'frank@example.com', isManager: false },
    { name: 'Grace Thomas', department: 'HR', contact: 'grace@example.com', isManager: true }
  ];

  $scope.selectedEmployee = {};

  $scope.openModal = function(emp) {
    $scope.selectedEmployee = emp;
  };

  $scope.sortBy = function(key) {
    if ($scope.sortKey === key) {
      $scope.sortReverse = !$scope.sortReverse;
    } else {
      $scope.sortKey = key;
      $scope.sortReverse = false;
    }
  };
});

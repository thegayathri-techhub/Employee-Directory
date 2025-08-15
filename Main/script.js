angular.module('SuggestionApp', []).controller('SuggestionController', function ($scope) {
    $scope.suggestions = [
      'Apple', 'Apricot', 'Avocado', 'Banana', 'Blackberry', 'Blueberry', 'Cherry', 'Coconut', 'Date',
      'Fig', 'Grape', 'Guava', 'Kiwi', 'Lemon', 'Mango', 'Melon', 'Nectarine', 'Orange', 'Papaya',
      'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberry', 'Strawberry', 'Watermelon'
    ];
  
    $scope.filteredSuggestions = [];
  
    $scope.updateSuggestions = function () {
      const input = ($scope.searchText || '').toLowerCase();
      if (!input) {
        $scope.filteredSuggestions = [];
        return;
      }
  
      $scope.filteredSuggestions = $scope.suggestions.filter(item =>
        item.toLowerCase().startsWith(input)
      );
    };
  
    $scope.selectSuggestion = function (suggestion) {
      $scope.searchText = suggestion;
      $scope.filteredSuggestions = [];
    };
  });
  
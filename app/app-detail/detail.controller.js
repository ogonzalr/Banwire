angular.module('detail', ['ui.bootstrap']);
function AccordionDemoCtrl($scope) {
	
  $scope.groups = [
    {
      title: "Dynamic Group Header - 1",
      content: "Dynamic Group Body - 1"
    },
    {
      title: "Dynamic Group Header - 2",
      content: "Dynamic Group Body - 2"
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };
  
    $scope.pro = [
      {
        a : "G",
        b : "123",
        c : "S1",
        d : "D6",
      },
         {
        a : "R",
        b : "456",
        c : "S2",
        d : "D5",
      },
         {
        a : "G",
        b : "789",
        c : "S3",
        d : "D4",
         },
    ];
    $scope.orderProp="d";                  
  
}
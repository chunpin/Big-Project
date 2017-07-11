  // Define the `app` module
var app = angular.module('app', []);

// Define the `testimonialCtrl` controller on the `app` module
app.controller('testimonialCtrl',['$scope', function($scope){


 $scope.pluralize = function (number, string ){
    // check if the string is 'Woche'
    if(string === 'Woche'){
        if( number > 1 ) {
          return number + " " + string + 'n';  
        }
        else if (number == 1){
          return number + " " + string;
        }
        else{
          return "";
        }

    } else {
        if( number > 1 ) {
          return number + " " + string + 'en';  
        }
        else if (number == 1){
          return number + " " + string;
        }
        else{
          return "";
        }
    }

   
 }

 $scope.displayDate = function (timeStamp) {
      var currentDate = Date.now();
      var convertToWeekNum = 604800000;
      var totalDays = Math.round((( currentDate - timeStamp  ) / convertToWeekNum ) * 7) // 1094 days
      var yearCount =  $scope.pluralize ( Math.floor( totalDays / 365.25) , 'Jahr' );   ;  // 2 years
      var yearRemainder = totalDays % 365.25; // 364 dyas left
      var monthCount  = $scope.pluralize(Math.floor( yearRemainder / 30.4375 ),'Monat');  

      var monthRemainder = Math.floor( yearRemainder % 30.4375);


      var weeksCount =  $scope.pluralize(Math.floor( monthRemainder / 7), 'Woche' );

      var weeksRemainder = monthRemainder % 7;
      var daysCount  = $scope.pluralize(Math.floor(weeksRemainder), 'Tag')
     
 
      return (`- ${yearCount}  ${monthCount}  ${weeksCount}  ${daysCount}` ) ;
  }





  $scope.headline = {
    mainText:'Warum unsere Kunden unseren Service lieben',
    subText:'Weil wir nur mit dem besten Service der Stadt zufrieden sind! Nur wenn du zufrieden bist, sind wir es auch!'
  }

  $scope.gender = {
    male:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-01.png',
    female:'/images/passfoto-rosenheim-biometrische-passbilder-personalausweis-visum-fotos-reisepass-quick-shot-kunden-02.png' 
  }

  $scope.comments = [
    { author: 'Bianca',
      text: 'Hab echt tolle Passfotos bekommen! Das Team war auch super nett und professionell.',
      img: $scope.gender.female,
      alt:'quick-shot-kunden-01',
      date:  $scope.displayDate(new Date("2014-6-26"))
      // date:  $scope.displayDate(new Date("2014-6-14"))
    }, 
    { author: 'Sonja',
      text: 'Ich habe Passbilder für meine Tochter machen lassen. Nettes Team, schneller Service, tolle Fotoqualität!',
      img: $scope.gender.female,
      alt:'quick-shot-kunden-02',
      date:  $scope.displayDate(new Date("2016-6-16"))
    }
  ];
}]);
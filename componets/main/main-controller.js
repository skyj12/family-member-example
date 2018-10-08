"use strict" ;
{
    angular.module('app')
   .controller('MainController', function (){
       const $ctrl = this;
        $ctrl.familyMembers = [ 
        {name: "Dennise Johnson", member: "mother", age:"45"},
        {name:"Nezzie Johnson", member:"cousin", age:"23"} ,
        {name:"Vera Johnson",member:"grandmother", age:"69"}
        ];
   });
}
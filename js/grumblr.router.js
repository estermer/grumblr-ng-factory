(function(){
  angular
    .module('grumblr')
    .config(router);

  router.$inject = ['$stateProvider'];

  function router($stateProvider){
    $stateProvider
     .state("grumbleIndex", {
       url: "/grumbles",
       templateUrl: "js/ng-views/index.html",
       controller: "GrumbleIndexController",
       controllerAs: "GrumbleIndexViewModel"
     })
     .state("grumbleShow", {
       url: "/grumbles/:id",
       templateUrl: "js/ng-views/show.html"
     });
  };
})();

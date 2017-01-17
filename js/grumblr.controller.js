(function(){
  angular
    .module('grumblr')
    .controller('GrumblrIndexCtrl', GrumblrIndexCtrl);

  function GrumblrIndexCtrl(){
    this.grumbles = [
      {title: "Thesse"},
      {title: "Are"},
      {title: "Hardcoded"},
      {title: "Grumbles"}
    ];
  };
})();

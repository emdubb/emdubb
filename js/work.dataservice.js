(function(){
  "use strict"

  angular
    .module("emdubb")
    .factory("workDataService", workDataService);

  workDataService.$inject = [];

  function workDataService() {
    var item1 = {
      title: "Project1",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum"
    }
    var item2 = {
      title: "Project2",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum"
    }
    var item3 = {
      title: "Project3",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum"
    }
    var item4 = {
      title: "Project4",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum"
    }
    var item5 = {
      title: "Project5",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum"
    }
    var item6 = {
      title: "Project6",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum"
    }

    var work = [
      item1,
      item2,
      item3,
      item4,
      item5,
      item6
    ]

    return work

  }

})();

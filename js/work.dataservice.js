(function(){
  "use strict"

  angular
    .module("emdubb")
    .factory("workDataService", workDataService);

  workDataService.$inject = [];

  function workDataService() {
    var item1 = {
      title: "PiRS",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: false
    }
    var item2 = {
      title: "Tsunami Campaign",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: true
    }
    var item3 = {
      title: "What's Slackin'",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: false
    }
    var item4 = {
      title: "Up the River",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: false
    }
    var item5 = {
      title: "RAVE Wireless",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: false
    }
    var item6 = {
      title: "RAVE Centric",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: false,
      interactive: true,
      print: false
    }
    var item7 = {
      title: "Gorilla Therapy",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: true
    }
    var item8 = {
      title: "Say What?",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: false,
      interactive: false,
      print: true
    }
    var item9 = {
      title: "Negretude",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: false,
      interactive: false,
      print: true
    }
    var item10 = {
      title: "Invisible Children",
      thumbUrl: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: false,
      interactive: false,
      print: true
    }

    var work = [
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
      item8,
      item9,
      item10
    ]

    return work

  }

})();

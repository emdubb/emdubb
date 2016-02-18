(function(){
  "use strict"

  angular
    .module("emdubb")
    .factory("workDataService", workDataService);

  workDataService.$inject = [];

  function workDataService() {
    var item1 = {
      id: 1,
      title: "PiRS",
      thumbUrl: "../img/thumbs/thumb.jpg",
      thumbUrlroll: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: false
    }
    var item2 = {
      id: 2,
      title: "Tsunami Campaign",
      thumbUrl: "../img/thumbs/thumb.jpg",
      thumbUrlroll: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: true
    }
    var item3 = {
      id: 3,
      title: "What's Slackin'",
      thumbUrl: "../img/thumbs/thumb.jpg",
      thumbUrlroll: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: false
    }
    var item4 = {
      id: 4,
      title: "Up the River",
      thumbUrl: "../img/thumbs/thumb.jpg",
      thumbUrlroll: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: false
    }
    var item5 = {
      id: 5,
      title: "RAVE Wireless",
      thumbUrl: "../img/thumbs/thumb.jpg",
      thumbUrlroll: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: false
    }
    var item6 = {
      id: 6,
      title: "RAVE Centric",
      thumbUrl: "../img/thumbs/thumb.jpg",
      thumbUrlroll: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: false,
      interactive: true,
      print: false
    }
    var item7 = {
      id: 7,
      title: "Gorilla Therapy",
      thumbUrl: "../img/thumbs/thumb.jpg",
      thumbUrlroll: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: true
    }
    var item8 = {
      id: 8,
      title: "Say What?",
      thumbUrl: "../img/thumbs/thumb.jpg",
      thumbUrlroll: "../img/thumbs/thumb.jpg",
      body: "lorem ipsum",
      development: false,
      interactive: false,
      print: true
    }
    var item9 = {
      id: 9,
      title: "Negretude",
      thumbUrl: "../img/negretude/negretude.jpg",
      thumbUrlroll: "../img/negretude/negretuderoll.jpg",
      body: "lorem ipsum",
      development: false,
      interactive: false,
      print: true
    }
    var item10 = {
      id: 10,
      title: "Invisible Children",
      thumbUrl: "../img/thumbs/invisible.jpg",
      thumbUrlroll: "../img/thumbs/invisibleroll.jpg",
      body: "lorem ipsum",
      development: false,
      interactive: false,
      print: true
    }

    var work = [
      item9,
      item10,
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      item7,
      item8
    ]

    return work

  }

})();

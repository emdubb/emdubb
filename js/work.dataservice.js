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
      thumbUrl: "../img/tsunami/tsunami.jpg",
      thumbUrlroll: "../img/tsunami/tsunamiroll.jpg",
      cover: "../img/tsunami/tsunamicover.jpg",
      body: "lorem ipsum",
      development: true,
      interactive: true,
      print: true
    }
    var item3 = {
      id: 3,
      title: "What's Slackin'",
      thumbUrl: "../img/slackline/slackline.jpg",
      thumbUrlroll: "../img/slackline/slacklineroll.jpg",
      logo: "../img/slackline/slacklinelogo.svg",
      cover: "../img/slackline/slacklinecover.jpg",
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
      cover: "../img/negretude/negretudecover.jpg",
      colImages: ["../img/negretude/color1.png", "../img/negretude/color2.png", "../img/negretude/color3.png"],
      fullImages: ["../img/negretude/negretude1.jpg", "../img/negretude/negretude2.jpg"],
      body: "Mumblecore affogato sartorial, everyday carry polaroid drinking vinegar man braid taxidermy cray scenester 90's forage tacos artisan fap. Aesthetic twee cred wayfarers letterpress, shoreditch chicharrones hella lo-fi everyday carry keffiyeh pug selfies artisan. Try-hard waistcoat listicle, taxidermy salvia actually next level chambray tousled farm-to-table thundercats messenger bag tote bag skateboard man braid. Paleo vegan craft beer ramps, pabst chambray cornhole gastropub flexitarian crucifix waistcoat slow-carb literally. Meditation synth hammock DIY selfies hella, cardigan lo-fi. Migas occupy normcore direct trade small batch. Selfies umami bicycle rights vice lo-fi normcore, salvia seitan squid chillwave mustache 90's.",
      development: false,
      interactive: false,
      print: true
    }
    var item10 = {
      id: 10,
      title: "Invisible Children",
      thumbUrl: "../img/invisible/invisible.jpg",
      thumbUrlroll: "../img/invisible/invisibleroll.jpg",
      cover: "../img/invisible/invisiblecover.jpg",
      fullImages: ["../img/invisible/invisible1.jpg"],
      body: "Mumblecore affogato sartorial, everyday carry polaroid drinking vinegar man braid taxidermy cray scenester 90's forage tacos artisan fap. Aesthetic twee cred wayfarers letterpress, shoreditch chicharrones hella lo-fi everyday carry keffiyeh pug selfies artisan. Try-hard waistcoat listicle, taxidermy salvia actually next level chambray tousled farm-to-table thundercats messenger bag tote bag skateboard man braid. Paleo vegan craft beer ramps, pabst chambray cornhole gastropub flexitarian crucifix waistcoat slow-carb literally. Meditation synth hammock DIY selfies hella, cardigan lo-fi. Migas occupy normcore direct trade small batch. Selfies umami bicycle rights vice lo-fi normcore, salvia seitan squid chillwave mustache 90's.",
      development: false,
      interactive: false,
      print: true
    }

    var work = [
      item1,
      item2,
      item3,
      item5,
      item6,
      item7,
      item9,
      item10
    ]

    return work

  }

})();

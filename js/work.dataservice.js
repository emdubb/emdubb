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
      thumbUrl: "../img/pirs/pirs.jpg",
      thumbUrlroll: "../img/pirs/pirsroll.jpg",
      cover: "../img/pirs/pirscover.jpg",
      fullImages: ["../img/pirs/pirs1.jpg", "../img/pirs/pirs2.jpg"],
      body: "Never argue with your friends about who gets to pick the music again! PiRS is a peer to peer music application ​ Simply log in with your Spotify Account, add your friends, and we will generate a radio based on your and your friends Spotify playlists!",
      github: "https://github.com/mklophaus/PiRS",
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
      colImages: ["../img/tsunami/county1.png", "../img/tsunami/county2.png", "../img/tsunami/county3.png"],
      fullImages: ["../img/tsunami/tsunami1.jpg", "../img/tsunami/tsunami2.jpg", "../img/tsunami/tsunami3.jpg"],
      body: 'After reviewing evacuation wayshowing material distributed to residents by emergency management departments in the United States, it became clear that wayshowing and wayfinding methodologies were absent. The challenge was defining criteria and performance tasks, if any, developed by stakeholders, and how decisions were being made in creating and distributing these materials. The project received recognition, awards and publication, including "Wayshowing > Wayfinding II: Basic and Interactive by Per Mollerup (2013)"',
      github: "https://github.com/emdubb/tsunami-api",
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
      fullImages: ["../img/slackline/slackline2.jpg", "../img/slackline/slackline3.jpg"],
      cover: "../img/slackline/slacklinecover.jpg",
      body: "Slacklining has a substaintial community built around it, but it is not widely recognized, so finding locations to set up a line is challenging. This application allows slackers to post the location of their lines. All users will be able to see a list and map of posted lines allowing the slackline community to foster and provide slackers with places they can practice with fellow slackers.",
      github: "https://github.com/emdubb/slackline-api",
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
      thumbUrl: "../img/wireless/wireless.jpg",
      thumbUrlroll: "../img/wireless/wirelessroll.jpg",
      body: "Taking Entertainment to New Heights. An entertainment app that allows passengers to wirelessly stream movies, tv shows, and audio to their personal device during their flight. Built on 3 different platforms as and iOS app, Android app, and web app users can wirelessly stream the latest content on their flight.",
      development: false,
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
      thumbUrl: "../img/gorilla/gorilla.jpg",
      thumbUrlroll: "../img/gorilla/gorillaroll.jpg",
      cover: "../img/gorilla/gorillacover.jpg",
      fullImages: ["../img/gorilla/gorilla1.jpg", "../img/gorilla/gorilla2.jpg"],
      body: 'A series worth going ape over. "Gorilla Therapy" is a micro-web series about a gorilla therapist. It’s slapstick humor calls for a cheeky logo and branding that can be used for a “gorilla marketing” sticker campaign.',
      behance: "https://www.behance.net/gallery/29233005/Gorilla-Therapy-Web-Series-Branding",
      development: false,
      interactive: false,
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
      body: "Unapologetic. Outspoken. Pride. Négretude tees make a positive statement while celebrating being of African descent. The siamese crocodile tee is the inaugural design for the fresh and bold designer T-Shirt line.",
      behance: "https://www.behance.net/gallery/29232247/Ngretude-T-Shirt",
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
      body: "Invisible Children works to raise awareness about the ongoing conflict in Africa - primarily the LRA conflict. The poster is to support the cause and to continue to raise awareness.",
      behance: "https://www.behance.net/gallery/29205763/Invisible-Children-Poster",
      development: false,
      interactive: false,
      print: true
    }

    var item11 = {
      id: 11,
      title: "Low Poly Poster",
      thumbUrl: "../img/lowpoly/lowpoly.jpg",
      thumbUrlroll: "../img/lowpoly/lowpolyroll.jpg",
      cover: "../img/lowpoly/lowpolycover.jpg",
      fullImages: ["../img/lowpoly/lowpoly1.jpg"],
      body: "The Alex Turner poster is the first in a series of posters centered around musicians. The low poly style focuses on breaking down facial features into planar structures to create a geometric representation of an organic form.",
      behance: "https://www.behance.net/gallery/29232601/Alex-Turner-Poster",
      development: false,
      interactive: false,
      print: true
    }

    var work = [
      item1,
      item2,
      item3,
      // item5,
      item11,
      item7,
      item9,
      item10
    ]

    return work

  }

})();

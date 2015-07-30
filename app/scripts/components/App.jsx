var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

var Timeline = require('./Timeline');

var App = React.createClass({
  render: function () {
    var thread = [
      { label: "Move to Australia", emoji: "🐨" },
      { label: "Release Knock", emoji: "💎", card: {
          img: "images/knock.png",
          header: "Release Knock on RubyGems",
          content: "Knock is an authentication solution for Rails API-only applications based on JSON Web Tokens."
        }
      },
      { date: "2015" },
      { label: "Graduate from Epitech", emoji:"🎓", card: {
          img: "images/graduation.jpg",
          header: "MS in Computer Science",
          content: "I'm somewhere on this pic throwing my mortarboard in the air... I swear!"
        }            
      },
      { label: "StartupBus Finalist", emoji:"🏆" },
      { date: "2014" },
      { label:"Back in Paris", emoji:"🇫🇷" },
      { label:"Hired at Quanta Computing", emoji:"📈", card: {
          img: "images/quanta.jpg",
          header: "Working at Quanta",
          content: "Graphs & graphs & graphs ... Building a monitoring application à la NewRelic."
        }
      },
      { date: "2013" },
      { label: "Study abroad in California", emoji: "🏄" },
      { label: "Intern at Appsfire", emoji: "📱"},
      { date: "2012" },
      { label: "Student Teacher at Epitech", emoji:"👓" },
      { date: "2011" },
      { label: "Intern at Miyowa", emoji: "👔" },
      { date: "2010" },
      { label: "First year at Epitech", emoji:"👓" },
      { date: "2009" },
      { label: "Bleeep, bleeep!", scale: 3, emoji: "💾", card: {
          img: "images/win95.jpg",
          header: "Bleep bleeeep!",
          content: "Playing around with my first computer."
        }
      },
      { date: "1998" },
      { label: "Born", scale: 3, emoji: "👶" },
      { date: "1991" }
    ];

    return (
      <div id="app">
        <Timeline thread={thread} />
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;

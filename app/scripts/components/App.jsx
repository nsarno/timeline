var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

var Timeline = require('./Timeline');

var App = React.createClass({
  render: function () {
    return (
      <div id="app">
        <Timeline>
          <Timeline.Thread id="main">
            <Timeline.Event label="Move to Australia" emoji="🐨"/>
            <Timeline.Event label="Release Knock" emoji="💎">
              <Timeline.EventCard
                img="images/knock.png"
                header="Release Knock on RubyGems"
                content={"Knock is an authentication solution for Rails API-only\
                applications based on JSON Web Tokens."}/>
            </Timeline.Event>
            <Timeline.Date date="2015" />

            <Timeline.Event label="Graduate from Epitech" emoji="🎓">
              <Timeline.EventCard
                img="images/graduation.jpg"
                header="MS in Computer Science"
                content={"I'm somewhere on this pic throwing my mortarboard in the air... I swear!"}/>
            </Timeline.Event>
            <Timeline.Event label="StartupBus Finalist" emoji="🏆"/>    
            <Timeline.Date date="2014" />

            <Timeline.Event label="Back in Paris" emoji="🇫🇷"/>
            <Timeline.Event label="Hired at Quanta Computing" emoji="📈">
              <Timeline.EventCard
                img="images/quanta.jpg"
                header="Working at Quanta"
                content={"Graphs & graphs & graphs ... Building a monitoring application à la NewRelic."}/>
            </Timeline.Event>
            <Timeline.Date date="2013" />

            <Timeline.Event label="Study abroad in California" emoji="🏄"/>
            <Timeline.Event label="Intern at Appsfire" emoji="📱"/>
            <Timeline.Date date="2012" />

            <Timeline.Event label="Student Teacher at Epitech" emoji="👓"/>
            <Timeline.Date date="2011" />

            <Timeline.Event label="Intern at Miyowa" emoji="👔"/>
            <Timeline.Date date="2010" />

            <Timeline.Event label="First year at Epitech" emoji="👓"/>
            <Timeline.Date date="2009" />

            <Timeline.Event label="Bleeep, bleeep!" scale={3} emoji="💾">
              <Timeline.EventCard
                img="images/win95.jpg"
                header="Bleep bleeeep!"
                content={"Playing around with my first computer."}/>
            </Timeline.Event>
            <Timeline.Date date="1998" />

            <Timeline.Event label="Born" scale={3} emoji="👶"/>
            <Timeline.Date date="1991" />
          </Timeline.Thread>
        </Timeline>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;

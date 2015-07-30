var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

var Timeline = require('./Timeline');

var App = React.createClass({
  render: function () {
    var content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
    Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus\
    veniam provident.";

    return (
      <div id="app">
        <Timeline>
          <Timeline.Thread id="main">
            <Timeline.Event date="2015" label="Move to Australia" />
            <Timeline.Event label="Release Knock" />
            <Timeline.Event date="2014" relationKey={'epitech'} label="Graduate from Epitech" />
            <Timeline.Event label="StartupBus Finalist" />
            <Timeline.Event date="2013" label="Hired at Quanta Computing" />
            <Timeline.Event date="2012" label="Study abroad in California" />
            <Timeline.Event label="Intern at Appsfire" />
            <Timeline.Event date="2011" relationKey={['epitech']} label="Student Teacher at Epitech" />
            <Timeline.Event date="2010" label="Intern at Miyowa" />
            <Timeline.Event date="2009" relationKey={['epitech']} label="First year at Epitech" />
            <Timeline.Event date="1998" label="Bleeep... First computer" scale={6}/>
            <Timeline.Event date="1991" label="Born" />
          </Timeline.Thread>
        </Timeline>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;

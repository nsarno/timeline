var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

var Timeline = require('./Timeline');

var App = React.createClass({
  render: function () {
    return (
      <div id="app">
        <Timeline>
          <Timeline.Thread>
            <Timeline.Event />
            <Timeline.Event />
            <Timeline.Event />
            <Timeline.Event />
            <Timeline.Event />
            <Timeline.Event />
          </Timeline.Thread>
        </Timeline>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;

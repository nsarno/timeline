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
          <Timeline.Thread>
            <Timeline.Event date="Jul 2015" header="Very important event" content={content} />
            <Timeline.Event date="Mar 2015" />
            <Timeline.Event date="Sep 2014" />
            <Timeline.Event date="Jun 2013" />
            <Timeline.Event date="Feb 2013" header="Very important event" content={content} />
            <Timeline.Event date="Oct 2012" />
          </Timeline.Thread>
        </Timeline>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;

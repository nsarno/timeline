var React = require("react");
var Router = require("react-router");
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div id="app">
        <h1>Home</h1>

        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
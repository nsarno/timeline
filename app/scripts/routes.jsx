var Router = require("react-router");
var Route = Router.Route;

var App = require('./components/App');

module.exports = (
  <Route path="/" handler={App}>
  </Route>
);

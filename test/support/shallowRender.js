var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var shallowRenderer = TestUtils.createRenderer();

var shallowRender = function (component) {
  shallowRenderer.render(React.createElement(component));
  return shallowRenderer.getRenderOutput();
};

module.exports = shallowRender;

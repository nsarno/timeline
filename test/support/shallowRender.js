var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var shallowRenderer = TestUtils.createRenderer();

var shallowRender = function (component, props={}, ...children) {
  shallowRenderer.render(React.createElement(component, props, children));
  return shallowRenderer.getRenderOutput();
};

module.exports = shallowRender;

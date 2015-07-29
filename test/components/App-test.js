var test = require('tape');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var shallowRenderer = TestUtils.createRenderer();

var App = require('../../app/scripts/components/App');

shallowRenderer.render(React.createElement(App));
const component = shallowRenderer.getRenderOutput();

test('App component has a valid type', function (t) {
  t.plan(1);
  t.equal(component.type, 'div');
});

test('App component has a valid id', function (t) {
  t.plan(1);
  t.equal(component.props.id, 'app');
});

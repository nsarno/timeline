var test = require('tape');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var shallowRenderer = TestUtils.createRenderer();

var Timeline = require('../../app/scripts/components/Timeline');

shallowRenderer.render(React.createElement(Timeline));
const component = shallowRenderer.getRenderOutput();

test('Timeline component has a valid type', function (t) {
  t.plan(1);
  t.equal(component.type, 'div');
});

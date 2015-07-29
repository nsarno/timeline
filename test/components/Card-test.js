var test = require('tape');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var shallowRenderer = TestUtils.createRenderer();

var Card = require('../../app/scripts/components/Card');

shallowRenderer.render(React.createElement(Card));
const component = shallowRenderer.getRenderOutput();

test('Card component has a valid type', function (t) {
  t.plan(1);
  t.equal(component.type, 'div');
});

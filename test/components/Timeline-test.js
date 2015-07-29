var test = require('tape');
var shallowRender = require('../support/shallowRender');
var Timeline = require('../../app/scripts/components/Timeline');

const component = shallowRender(Timeline);

test('Timeline component has a valid type', function (t) {
  t.plan(1);
  t.equal(component.type, 'div');
});

var test = require('tape');
var shallowRender = require('../support/shallowRender');
var App = require('../../app/scripts/components/App');

const component = shallowRender(App);

test('App component has a valid type', function (t) {
  t.plan(1);
  t.equal(component.type, 'div');
});

test('App component has a valid id', function (t) {
  t.plan(1);
  t.equal(component.props.id, 'app');
});

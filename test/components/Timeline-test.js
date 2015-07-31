var test = require('tape');
var shallowRender = require('../support/shallowRender');
var Timeline = require('../../app/scripts/components/Timeline');

var thread = [
  { label: "Move to Australia", emoji: "🐨" },
  { label: "Release Knock", emoji: "💎", card: {
      img: "images/knock.png",
      header: "Release Knock on RubyGems",
      content: "Knock is an authentication solution for Rails API-only applications based on JSON Web Tokens."
    }
  },
  { date: "2015" }
];

const component = shallowRender(Timeline, {thread: thread});

test('Timeline component has a valid type', function (t) {
  t.plan(1);
  t.equal(component.type, 'div');
});

test('Timeline component has a valid class', function (t) {
  t.plan(1);
  t.equal(component.props.className, 'tl');
});

test('Timeline component has a thread child', function (t) {
  t.plan(1);
  t.equal(component.props.children.type.displayName, 'Thread');
});

console.log(component);
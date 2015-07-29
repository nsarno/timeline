var React = require('react');
var Card = require('./Card');

var Timeline = React.createClass({
  render: function() {
    return (
      <div className="tl">
        {this.props.children}
      </div>
    );
  }
});

Timeline.Thread = React.createClass({
  render: function() {
      return (
        <div className="tl-thread">
          <div className="tl-timeline" />
          {this.props.children}
        </div>
      );
  }
});

Timeline.EventMark = React.createClass({
  render: function() {
    return (
      <div className="tl-event-mark">
        <div className="tl-event-dot" />
        <div className="tl-event-date">
          {this.props.date}
        </div>
      </div>
    );
  }
});

Timeline.EventCard = React.createClass({
  render: function() {
    return (
      <div className="tl-event-card">
        <Card
          header="Very important event"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, officiis sunt neque facilis culpa molestiae necessitatibus delectus veniam provident." />
      </div>
    );
  }
});

Timeline.Event = React.createClass({
  render: function() {
      return (
        <div className="tl-event">
          <Timeline.EventCard />
          <Timeline.EventMark date="Oct 2009" />
        </div>
      );
  }
});

module.exports = Timeline;

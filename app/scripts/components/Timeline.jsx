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
        <Card header={this.props.header} content={this.props.content} />
      </div>
    );
  }
});

Timeline.Event = React.createClass({
  render: function() {
    var eventCard = function(header, content) {
      if (header !== undefined && content !== undefined) {
        return <Timeline.EventCard header={header} content={content}/>;
      }
    };
    return (
      <div className="tl-event">
        {eventCard(this.props.header, this.props.content)}
        <Timeline.EventMark date={this.props.date} />
      </div>
    );
  }
});

module.exports = Timeline;

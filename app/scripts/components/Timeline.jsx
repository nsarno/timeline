var React = require('react');
var classNames = require('classnames');
var _ = require('lodash');

var Card = require('./Card');

var Timeline = React.createClass({
  render: function() {

    // Return an event card component if card is defined
    var eventCard = function (card) {
      if (card !== undefined) {
        return (
          <Timeline.EventCard
            img={card.img}
            header={card.header}
            content={card.content} />
        );
      }
    };

    // Create timeline children from thread JSON
    var items = function (thread) {
      var i = 0;
      return _.map(thread, function (item) {
        if (item.label === undefined) {
          // Item is a date
          return (<Timeline.Date key={i++} date={item.date} />);
        } else {
          // Item is an event
          return (
            <Timeline.Event key={i++} label={item.label} emoji={item.emoji} scale={item.scale}>
              {eventCard(item.card)}
            </Timeline.Event>
          );
        }
      });
    };


    return (
      <div className="tl">
        <Timeline.Thread>
          {items(this.props.thread)}
        </Timeline.Thread>
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
    var date = function(date) {
      if (date) {
        return (
          <button className="tl-event-date">
            {date}
          </button>
        );
      }
    }
    
    return (
      <div className="tl-event-mark">
        <div className="tl-event-dot">
          {this.props.emoji}
        </div>
        {date(this.props.date)}
      </div>
    );
  }
});

Timeline.Date = React.createClass({
  render: function() {
    return (
      <div className="tl-date">
        <button className="tl-date-label">
          {this.props.date}
        </button>
      </div>
    );
  }
});

Timeline.EventCard = React.createClass({
  render: function() {
    return (
      <div className="tl-event-card">
        <Card img={this.props.img} header={this.props.header} content={this.props.content} />
      </div>
    );
  }
});

Timeline.EventLabel = React.createClass({
  render: function() {
    return (
      <button className="tl-event-label">
        {this.props.title}
      </button>
    );
  }
});

Timeline.Event = React.createClass({

  render: function() {
    var style = function(scale) {
      if (scale !== undefined) {
        return { marginTop: 100 * scale + 'px' };
      } else {
        return {};
      }
    };
    var eventCard = function(header, content) {
      if (header !== undefined && content !== undefined) {
        return <Timeline.EventCard header={header} content={content}/>;
      }
    };
    var classes = classNames('tl-event', this.props.relationKey);
    return (
      <div className={classes} style={style(this.props.scale)}>
        {this.props.children}
        <Timeline.EventMark date={this.props.date} emoji={this.props.emoji}/>
        {this.props.label ? <Timeline.EventLabel title={this.props.label}/> : null}
      </div>
    );
  }
});

module.exports = Timeline;

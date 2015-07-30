var React = require('react');
var classNames = require('classnames');
var $ = require('jquery');

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
        <button className="tl-event-date">
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
        <Card header={this.props.header} content={this.props.content} />
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

  // hightlightRelatedEvents: function(key, baseColor, highlightColor) {
  //   var events = $("." + key);
  //   var nEvents = events.length;
  //   var dots = $("." + key + " .tl-event-dot");
  //   var nDots = dots.length;

  //   function changeColor(color) {
  //     for(var i = 0; i < nDots; i ++) {
  //       dots[i].style.backgroundColor = color;
  //     }
  //   }

  //   for(var i = 0; i < nEvents; i ++) {
  //     events[i].onmouseover = function() {
  //       changeColor(highlightColor);
  //     };
  //     events[i].onmouseout = function() {
  //       changeColor(baseColor);
  //     };
  //   }
  // },

  componentDidMount: function() {
    // if (this.props.relationKey) {
    //   this.hightlightRelatedEvents(this.props.relationKey, '#3498DB', '#2ecc71');
    // }
  },

  render: function() {
    var style = function(scale) {
      if (scale !== undefined) {
        return { height: 100 * scale + 'px' };
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
        {this.props.label ? <Timeline.EventLabel title={this.props.label}/> : null}
        {this.props.date ? <Timeline.EventMark date={this.props.date} /> : null}
      </div>
    );
  }
});

module.exports = Timeline;

var React = require('react');

var Card = React.createClass({
  render: function() {
    var cardImage = function(src) {
      if (src !== undefined) {
        var style = {
          backgroundImage: 'url(' + src+ ')',
        }
        return (
          <div className="card-image">
            <img style={style} alt="" />
          </div>
        );
      }
    };

    return (
      <div className="card">
        {cardImage(this.props.img)}
        <div className="card-header">
          {this.props.header}
        </div>
        <div className="card-copy">
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
});

module.exports = Card;

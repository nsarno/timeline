var React = require('react');

var Card = React.createClass({
  render: function() {
    var cardImage = function(src) {
      if (src !== undefined) {
        return (
          <div className="card-image">
            <img src={src} alt="" />
          </div>
        );
      }
    };

    return (
      <div className="card">
        {cardImage(this.props.imgSrc)}
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

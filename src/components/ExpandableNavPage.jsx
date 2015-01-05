'use strict';

var React = require('react');

var ExpandableNavPage = React.createClass({
  propTypes: {
    fullStyle: React.PropTypes.object,
    smallStyle: React.PropTypes.object
  },
  getDefaultProps() {
    return {
      fullStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 240,
        paddingRight: 60
      },
      smallStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 60,
        paddingRight: 60
      }
    };
  },
  render() {
    var style = this.props.expanded ? this.props.fullStyle : this.props.smallStyle;
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ExpandableNavPage;

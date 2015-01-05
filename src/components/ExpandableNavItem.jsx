'use strict';

var React = require('react/addons');

var ExpandableNavItem = React.createClass({
  propTypes: {
    small: React.PropTypes.element,
    full: React.PropTypes.element,
    smallStyle: React.PropTypes.object,
    fullStyle: React.PropTypes.object
  },
  render() {
    var style = this.props.expanded ? this.props.fullStyle : this.props.smallStyle;

    return (
      <span style={style}>{this.props.expanded ? this.props.full : this.props.small}</span>
    );
  }
});

module.exports = ExpandableNavItem;

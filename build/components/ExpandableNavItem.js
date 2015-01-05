'use strict';

var React = require('react/addons');

var ExpandableNavItem = React.createClass({displayName: "ExpandableNavItem",
  propTypes: {
    small: React.PropTypes.element,
    full: React.PropTypes.element,
    smallStyle: React.PropTypes.object,
    fullStyle: React.PropTypes.object
  },
  render:function() {
    var style = this.props.expanded ? this.props.fullStyle : this.props.smallStyle;

    return (
      React.createElement("span", {style: style}, this.props.expanded ? this.props.full : this.props.small)
    );
  }
});

module.exports = ExpandableNavItem;

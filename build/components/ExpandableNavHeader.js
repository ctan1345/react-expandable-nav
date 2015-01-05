'use strict';

var React = require('react');

var assign = require('lodash.assign'),
    joinClasses = require('../utils/joinClasses');

var ExpandableNavItem = require('./ExpandableNavItem');

var ExpandableNavHeader = React.createClass({displayName: "ExpandableNavHeader",
  propTypes: {
    small: React.PropTypes.element,
    full: React.PropTypes.element,
    headerStyle: React.PropTypes.object,
    smallStyle: React.PropTypes.object,
    fullStyle: React.PropTypes.object,
    smallClass: React.PropTypes.string,
    fullClass: React.PropTypes.string
  },
  getDefaultProps:function() {
    return {
      headerStyle: {
        width: 100 + '%',
        margin: 0
      },
    };
  },
  render:function() {
    var headerStyle = assign(this.props.headerStyle, {
      display: 'block',
      float: 'none'
    });
    var sharedStyle = {
      display: 'block',
      fontWeight: 'bold',
      fontSize: 20,
    };
    var smallStyle = assign(this.props.smallStyle, sharedStyle),
        fullStyle = assign(this.props.fullStyle, sharedStyle);

    var classes = "navbar-header " +
      joinClasses(this.props.className, this.props.expanded ? this.props.fullClass : this.props.smallClass);

    return (
      React.createElement("div", {style: headerStyle, className: classes}, 
        React.createElement("div", {style: headerStyle, className: "navbar-brand"}, 
          React.createElement(ExpandableNavItem, React.__spread({ref: "navItem"},  this.props, {smallStyle: smallStyle, fullStyle: fullStyle}))
        )
      )
    );
  },
  getNavItem:function() {
    return this.refs.navItem;
  }
});

module.exports = ExpandableNavHeader;

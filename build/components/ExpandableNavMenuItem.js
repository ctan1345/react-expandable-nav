'use strict';

var React = require('react');

var assign = require('lodash.assign'),
    joinClasses = require('../utils/joinClasses');

var ExpandableNavItem = require('./ExpandableNavItem');

var ExpandableNavMenuItem = React.createClass({displayName: "ExpandableNavMenuItem",
  propTypes: {
    small: React.PropTypes.element,
    full: React.PropTypes.element,
    smallClass: React.PropTypes.string,
    fullClass: React.PropTypes.string,
    smallStyle: React.PropTypes.object,
    fullStyle: React.PropTypes.object,
    url: React.PropTypes.string
  },
  getDefaultProps:function() {
    var sharedStyle = {
      paddingTop: 13,
      paddingRight: 15,
      paddingBottom: 13,
      paddingLeft: 12
    };
    return {
      smallStyle: sharedStyle,
      fullStyle: sharedStyle
    };
  },
  render:function() {
    var $__0=      this.props,active=$__0.active,url=$__0.url,small=$__0.small,full=$__0.full,props=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{active:1,url:1,small:1,full:1});

    var liStyle = {
      float: 'none'
    };
    var aStyle = {
      padding: 0
    };
    var smallStyle = assign(this.props.smallStyle, {
      display: 'block',
      fontSize: 20,
    });
    var fullStyle = assign(this.props.fullStyle, {
      display: 'block',
      fontSize: 20,
    });
    var classes = active ? 'active' : '' +
      joinClasses(this.props.className, this.props.expanded ? this.props.fullClass : this.props.smallClass);

    return (
      React.createElement("li", {className: classes, style: liStyle}, 
        React.createElement("a", {ref: "link", href: url, onClick: this.props.onSelect, style: aStyle}, 
          React.createElement(ExpandableNavItem, React.__spread({small: small, full: full, smallStyle: smallStyle, fullStyle: fullStyle},  props))
        )
      )
    );
  }
});

module.exports = ExpandableNavMenuItem;

'use strict';

var React = require('react');

var assign = require('lodash.assign'),
    joinClasses = require('../utils/joinClasses');

var ExpandableNavItem = require('./ExpandableNavItem');

var ExpandableNavMenuItem = React.createClass({
  propTypes: {
    small: React.PropTypes.element,
    full: React.PropTypes.element,
    smallClass: React.PropTypes.string,
    fullClass: React.PropTypes.string,
    smallStyle: React.PropTypes.object,
    fullStyle: React.PropTypes.object,
    url: React.PropTypes.string,
    tooltip: React.PropTypes.string
  },
  componentDidUpdate() {
    $('[data-toggle="tooltip"]').tooltip();
  },
  getDefaultProps() {
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
  render() {
    var {active, url, small, full, ...props} = this.props;

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

    var link;
    var navItemStyle = {
      cursor: 'pointer'
    };
    if (this.props.tooltip && !this.props.expanded) {
      link = (
        <a ref="link" href={url} onClick={this.props.onSelect} style={aStyle} data-toggle="tooltip" data-placement="right" title={this.props.tooltip}>
          <ExpandableNavItem style={navItemStyle} small={small} full={full} smallStyle={smallStyle} fullStyle={fullStyle} {...props} />
        </a>
      );
    } else {
      link = (
        <a ref="link" href={url} onClick={this.props.onSelect} style={aStyle}>
          <ExpandableNavItem style={navItemStyle} small={small} full={full} smallStyle={smallStyle} fullStyle={fullStyle} {...props} />
        </a>
      );
    }

    return (
      <li className={classes} style={liStyle}>
        {link}
      </li>
    );
  }
});

module.exports = ExpandableNavMenuItem;

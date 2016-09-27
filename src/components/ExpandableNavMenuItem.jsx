var React = require('react');

var assign = require('object-assign'),
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
    tooltip: React.PropTypes.string,
    active: React.PropTypes.bool,
    onClick: React.PropTypes.func
  },
  componentDidUpdate() {
    if (!this.props.tooltip) {
      return;
    }

    var $ = this.props.jquery;
    if (this.props.expanded) {
      $(this.refs.link).tooltip('disable');
    } else {
      $(this.refs.link).tooltip('enable');
    }
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
  handleClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    this.props.onSelect();
  },
  render() {
    var {active, url, small, full, ...props} = this.props;

    var liStyle = {
      float: 'none'
    };
    var aStyle = {
      padding: 0
    };
    var smallStyle = assign(this.props.smallStyle || {}, {
      display: 'block',
      fontSize: 20,
    });
    var fullStyle = assign(this.props.fullStyle || {}, {
      display: 'block',
      fontSize: 20,
    });
    var classes = active ? 'active' : '' +
      joinClasses(this.props.className, this.props.expanded ? this.props.fullClass : this.props.smallClass);

    var link;
    var navItemStyle = {
      cursor: 'pointer'
    };

    let linkItemProps = {
        ref: "link",
        onClick: this.handleClick,
        style: aStyle
    }
    // Check for tooltip compatibility
    if (this.props.tooltip) {
      if (!this.props.jquery) {
        throw new Error('jQuery dependency must be passed to ExpandableNavMenuItem to enable tooltip function');
      }

      linkItemProps = {
          ...linkItemProps,
          'data-toggle': 'menuitem-tooltip',
          'data-placement': 'right',
          title: this.props.toolTip
      }
    }

    const navItemProps = {
        style: navItemStyle,
        small: small,
        full: full,
        smallStyle: smallStyle,
        fullStyle: fullStyle
    }
    var navItem = React.createElement(ExpandableNavItem, { ...navItemProps, ...props })
    var linkItem = React.createElement('a', linkItemProps, navItem)

    return (
      <li className={classes} style={liStyle}>
        { linkItem }
      </li>
    );
  }
});

module.exports = ExpandableNavMenuItem;

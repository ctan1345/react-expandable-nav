'use strict';

var React = require('react/addons');

var joinClasses = require('../utils/joinClasses');

var ExpandableNavMenu = React.createClass({displayName: "ExpandableNavMenu",
  propTypes: {
    fullClass: React.PropTypes.string,
    smallClass: React.PropTypes.string,
  },
  getInitialState:function() {
    return {
      active: 0
    };
  },
  render:function() {
    var ulStyle = {
      float: 'none'
    };
    var classes = "nav navbar-nav " +
      joinClasses(this.props.className, this.props.expanded ? this.props.fullClass : this.props.smallClass);

    return (
      React.createElement("ul", {className: classes, style: ulStyle}, 
        React.Children.map(this.props.children, this.renderMenuItems)
      )
    );
  },
  handleSelect:function(i) {
    this.setState({active: i});
  },
  renderMenuItems:function(child, i) {
    return React.addons.cloneWithProps(child, {
      expanded: this.props.expanded,
      active: this.state.active === i,
      key: child.key ? child.key : i,
      ref: child.ref,
      onSelect: this.handleSelect.bind(null, i)
    });
  }
});

module.exports = ExpandableNavMenu;

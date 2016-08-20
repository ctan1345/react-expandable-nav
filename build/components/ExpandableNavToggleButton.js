var React = require('react');

var assign = require('object-assign'),
    joinClasses = require('../utils/joinClasses');

var ExpandableNavToggleButton = React.createClass({displayName: "ExpandableNavToggleButton",
  propTypes: {
    small: React.PropTypes.element,
    full: React.PropTypes.element,
    smallStyle: React.PropTypes.object,
    fullStyle: React.PropTypes.object,
    smallClass: React.PropTypes.string,
    fullClass: React.PropTypes.string
  },
  getDefaultProps:function() {
    return {
      small: React.createElement("span", {className: "glyphicon glyphicon-chevron-right"}),
      full: React.createElement("span", {className: "glyphicon glyphicon-chevron-left"}),
      smallStyle: {top: 5, left: 55},
      fullStyle: {top: 5, left: 245}
    };
  },
  render:function() {
    return (
      React.createElement("div", null, 
        this.renderToggleButton()
      )
    );
  },
  renderToggleButton:function() {
    var toggleButton, style, classes;

    var sharedStyle = {
      position: 'fixed',
    };

    style = assign(sharedStyle, this.props.style || {});

    if (this.props.expanded) {
      toggleButton = this.props.full;
      style = assign(style, this.props.fullStyle);
      classes = this.props.fullClass
    } else {
      toggleButton = this.props.small;
      style = assign(style, this.props.smallStyle);
      classes = this.props.smallClass
    }

    return React.cloneElement(toggleButton, {
      ref: toggleButton.ref,
      className: joinClasses(this.props.className, classes, toggleButton.props.className),
      style: style,
      onClick: this.props.handleToggle
    });
  }
});

module.exports = ExpandableNavToggleButton;

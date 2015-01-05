'use strict';

var React = require('react');

var ExpandableNavPage = React.createClass({displayName: "ExpandableNavPage",
  propTypes: {
    fullStyle: React.PropTypes.object,
    smallStyle: React.PropTypes.object
  },
  getDefaultProps:function() {
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
  render:function() {
    var style = this.props.expanded ? this.props.fullStyle : this.props.smallStyle;
    return (
      React.createElement("div", {style: style}, 
        this.props.children
      )
    );
  }
});

module.exports = ExpandableNavPage;

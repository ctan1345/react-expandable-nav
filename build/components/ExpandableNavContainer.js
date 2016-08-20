var React = require('react');
var assign = require('object-assign');

var ExpandableNavContainer = React.createClass({displayName: "ExpandableNavContainer",
  getInitialState:function() {
    return {
      expanded: this.props.expanded || false,
    };
  },
  handleToggle:function() {
    this.setState({expanded: !this.state.expanded});
  },
  render:function() {
    return (
      React.createElement("div", {ref: "someref"}, 
        
            React.Children.map(this.props.children, function(child, i) {
                var props = assign({},{
                  key: child.key ? child.key : i,
                  expanded: this.state.expanded,
                  handleToggle: this.handleToggle
                }, this.props)
                return React.cloneElement(child, props);
            }.bind(this))
        
      )
    );
  }
});

module.exports = ExpandableNavContainer;

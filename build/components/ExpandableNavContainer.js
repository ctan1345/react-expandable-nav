var React = require('react');
var assign = require('object-assign');

var ExpandableNavContainer = React.createClass({displayName: "ExpandableNavContainer",
  getInitialState:function() {
    return {
      expanded: this.props.expanded || false,
    };
  },
  handleToggle:function(){
    this.setState({expanded: !this.state.expanded});
  },
  render:function() {
    return (
      React.createElement("div", null, 
        
            React.Children.map(this.props.children, function(child, i) {
                var childProps = {
                  key: child.key ? child.key : i,
                  expanded: this.state.expanded,
                  handleToggle: this.handleToggle
                }
                
                return React.cloneElement(child, Object.assign({}, childProps ));
            }.bind(this))
        
      )
    );
  }
});

module.exports = ExpandableNavContainer;

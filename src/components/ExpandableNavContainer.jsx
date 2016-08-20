var React = require('react');
var assign = require('object-assign');

var ExpandableNavContainer = React.createClass({
  getInitialState() {
    return {
      expanded: this.props.expanded || false,
    };
  },
  handleToggle(){
    this.setState({expanded: !this.state.expanded});
  },
  render() {
    return (
      <div>
        {
            React.Children.map(this.props.children, (child, i) =>{
                var childProps = {
                  key: child.key ? child.key : i,
                  expanded: this.state.expanded,
                  handleToggle: this.handleToggle
                }
                
                return React.cloneElement(child, { ...childProps });
            })
        }
      </div>
    );
  }
});

module.exports = ExpandableNavContainer;

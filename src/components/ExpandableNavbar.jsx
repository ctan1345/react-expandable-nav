var React = require('react');

var joinClasses = require('../utils/joinClasses'),
    assign = require('object-assign');

var ExpandableNavbar = React.createClass({
  propTypes: {
    expanded: React.PropTypes.bool,
    fullWidth: React.PropTypes.number,
    smallWidth: React.PropTypes.number,
    fullClass: React.PropTypes.string,
    smallClass: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      fullWidth: 240,
      smallWidth: 50
    };
  },
  render() {
    var navbarStyle = assign({
      position: 'fixed',
      top: 0,
      left: 0,
      height: 100 + '%',
      borderRadius: 0,
      border: 0,
      width: this.props.expanded ? this.props.fullWidth : this.props.smallWidth
    }, this.props.style);

    var navbarContainerStyle = {
      padding: 0,
      width: 100 + '%',
      height: 100 + '%',
      position: 'relative'
    };

    var classes = "navbar navbar-inverse " +
      joinClasses(this.props.className, this.props.expanded ? this.props.fullClass : this.props.smallClass);
    return (
      <div className={classes} style={navbarStyle} role="navigation">
        <div style={navbarContainerStyle}>
            {
                React.Children.map(this.props.children, (child, index) =>{
                    return React.cloneElement(child, {
                        key: index,
                        expanded: this.props.expanded
                    });
                })
            }
        </div>
      </div>
    );
  }
});

module.exports = ExpandableNavbar;

var React = require('react');

var joinClasses = require('../utils/joinClasses'),
    assign = require('object-assign');

var ExpandableNavMenu = React.createClass({
  propTypes: {
    fullClass: React.PropTypes.string,
    smallClass: React.PropTypes.string,
    fullStyle: React.PropTypes.object,
    smallStyle: React.PropTypes.object
  },
  getInitialState() {
    if (!this.props.children) {
      return {
        active: 0
      };
    }

    for (var i = 0; i < this.props.children.length; i++) {
      var child = this.props.children[i];
      if (child.props.active) {
        return {
          active: i
        };
      }
    }

    return {
      active: 0
    };

  },
  render() {
    var ulStyle = assign({
      float: 'none',
      margin: 0
    }, this.props.style);

    ulStyle = assign(ulStyle, this.props.expanded ? this.props.fullStyle : this.props.smallStyle);

    var classes = "nav navbar-nav " +
      joinClasses(this.props.className, this.props.expanded ? this.props.fullClass : this.props.smallClass);

    return (
      <ul className={classes} style={ulStyle}>
        {
            React.Children.map(this.props.children, (child, index) =>{
                return React.cloneElement(child, {
                    expanded: this.props.expanded,
                    active: this.state.active === index,
                    key: child.key ? child.key : index,
                    ref: child.ref,
                    onSelect: this.handleSelect.bind(null, index)
                });
            })
        }
      </ul>
    );
  },
  handleSelect(i) {
    this.setState({active: i});
  }
});

module.exports = ExpandableNavMenu;

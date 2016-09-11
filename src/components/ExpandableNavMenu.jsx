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
  calculateActiveIdx() {

    for(let i = 0; i < this.props.children.length; i++){
        if(this.props.children[i].props.active){
          return i
        }
    }

    if(this.state.hasOwnProperty('active')){
        return this.state.active
    }

    const active = 0;
    this.setState({active})

    return active
  },
  render() {
    var ulStyle = assign({
      float: 'none',
      margin: 0
    }, this.props.style);

    ulStyle = assign(ulStyle, this.props.expanded ? this.props.fullStyle : this.props.smallStyle);

    var classes = "nav navbar-nav " +
      joinClasses(this.props.className, this.props.expanded ? this.props.fullClass : this.props.smallClass);

    const activeIdx = calculateActiveIdx()
    return (
      <ul className={classes} style={ulStyle}>
        {
            React.Children.map(this.props.children, (child, index) =>{
                return React.cloneElement(child, {
                    expanded: this.props.expanded,
                    active: activeIdx === index,
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

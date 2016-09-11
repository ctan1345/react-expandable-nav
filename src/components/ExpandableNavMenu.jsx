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

    // Check against the state variable
    if(this.state && this.state.hasOwnProperty('active')){
        return this.state.active
    }

    return undefined
  },
  render() {
    var ulStyle = assign({
      float: 'none',
      margin: 0
    }, this.props.style);

    ulStyle = assign(ulStyle, this.props.expanded ? this.props.fullStyle : this.props.smallStyle);

    var classes = "nav navbar-nav " +
      joinClasses(this.props.className, this.props.expanded ? this.props.fullClass : this.props.smallClass);

    let activeIdx = this.calculateActiveIdx()
    if(this.props.defaultActive && activeIdx === null){
        activeIdx = this.props.defaultActive
    }
    return (
      <ul className={classes} style={ulStyle}>
        {
            React.Children.map(this.props.children, (child, index) =>{
                return React.cloneElement(child, {
                    expanded: this.props.expanded,
                    active: activeIdx ? activeIdx === index : undefined,
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

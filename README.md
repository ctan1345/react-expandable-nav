react-expandable-nav
====================
This package is built upon Bootstrap.

## Demo
[http://ctan1345.github.io/react-expandable-nav/](http://ctan1345.github.io/react-expandable-nav/)

## Installation
`npm install [--save] react-expandable-nav`

## Dependenecy
Bootstrap: [http://getbootstrap.com/](http://getbootstrap.com/)

jQuery (for tooltip function): [http://jquery.com/](http://jquery.com/)


## Usage
### Basic
The simplest example requires you to wrap everything inside `<ExpandableNavContainer>` and your contents inside `<ExpandableNavPage>`.
You have to also define the element that is going to be rendered when the navbar expanded and not expanded.

```javascript
  var ExpandableNav = require('../../src/index');
  // Or var ExpandableNavContainer = ExpandableNav.ExpandableNavContainer;
  var {ExpandableNavContainer, ExpandableNavbar, ExpandableNavHeader,
      ExpandableNavMenu, ExpandableNavMenuItem, ExpandableNavPage,
      ExpandableNavToggleButton} = ExpandableNav;

  var App = React.createClass({
    render() {
      var header = {
        small: <span className="logo">R</span>,
        full: <span>React</span>
      };
      var menuItems = {
        small: [<span className="glyphicon glyphicon-home"></span>, <span className="glyphicon glyphicon-user"></span>],
        full: [<span>Home</span>, <span>About us</span>, <span>Contact us</span>]
      };
      return (
        <ExpandableNavContainer>
          <ExpandableNavbar>
            <ExpandableNavHeader small={header.small} full={header.full} />
            <ExpandableNavMenu>
              <ExpandableNavMenuItem small={menuItems.small[0]} full={menuItems.full[1]} />
              <ExpandableNavMenuItem small={menuItems.small[1]} full={menuItems.full[2]} />
            </ExpandableNavMenu>
          </ExpandableNavbar>
          <ExpandableNavToggleButton />
          <ExpandableNavPage>
            <p>Hello world</p>
          </ExpandableNavPage>
        </ExpandableNavContainer>
      );
    }
  });

```
### Advanced usage
You can substitute the default toggle button with your own:
```javascript
  <ExpandableNavToggleButton small={<span>open</span>} full={<span>close</span>}/>
```

You can control the width of the navbar by specifying `fullWidth` and `smallWidth` attribute on `ExpandableNavbar`:
```javascript
  <ExpandableNavContainer>
    <ExpandableNavbar fullWidth={300} smallWidth={60}>
      ...
    </ExpandableNavbar>
  </ExpandableNavContainer>
```

If you do that, you probably want to change the style as well.
To do that, you can provide inline style.
```javascript
  var navPageStyle = {
    full: {paddingLeft: 200},
    small: {paddingLeft: 30}
  };
  var navHeaderStyle = {
    full: {paddingLeft: 10},
    small: {paddingLeft: 5}
  };
  <ExpandableNavContainer>
    <ExpandableNavbar>
      <ExpandableNavHeader small={header.small} full={header.full} fullStyle={navHeaderStyle.full} smallStyle={navHeaderStyle.small} />
      ...
    </ExpandableNavbar>
    <ExpandableNavPage fullStyle={navPageStyle.full} smallStyle={navPageStyle.small}>
      ...
    </ExpandableNavPage>
  </ExpandableNavContainer>
```

Alternatively, you can specify the class.
```javascript
  <ExpandableNavContainer>
    <ExpandableNavbar fullClass={"full"} smallClass={"small"}>
      ...
    </ExpandableNavbar>
    <ExpandableNavPage fullClass={'full'} smallClass={'small'}>
      ...
    </ExpandableNavPage>
  </ExpandableNavContainer>
```


## Development

### Run example
```shell
  npm install
  npm start
  open localhost:3000
```

### Watcher
```shell
  grunt watch
```

## Testing
```shell
  grunt test
```


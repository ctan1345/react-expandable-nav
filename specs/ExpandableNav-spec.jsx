'use strict';

var React = require('react/addons'),
    ReactTestUtils = React.addons.TestUtils;

var chai = require('chai');
var expect = chai.expect;

var ExpandableNav = require('../build/components/ExpandableNav'),
    ExpandableNavbar = require('../build/components/ExpandableNavbar');

describe('ExpandableNav', function() {
  var instance;
  before(function() {
    instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNav expanded={true}>
        <ExpandableNavbar ref="navbar" />
      </ExpandableNav>
    );
  });

  it('initialises expanded state the same as props', function() {
    expect(instance.state.expanded).to.be.true;
  });

  it('passes expanded props to children', function() {
    var navbar = ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'navbar');

    expect(instance.refs.navbar.props.expanded).to.be.true;
  });
});

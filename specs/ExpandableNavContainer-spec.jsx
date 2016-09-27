'use strict';

var React = require('react'),
        ReactTestUtils = require('react-addons-test-utils');

var chai = require('chai');
var expect = chai.expect;

var ExpandableNavContainer = require('../build/components/ExpandableNavContainer'),
    ExpandableNavbar = require('../build/components/ExpandableNavbar');

describe('ExpandableNavContainer', function() {
  var instance;
  before(function() {
      instance = ReactTestUtils.renderIntoDocument(
          <ExpandableNavContainer expanded={true}>
              <ExpandableNavbar />
          </ExpandableNavContainer>
      );
  });

  it('initialises expanded state the same as props', function() {
    expect(instance.state.expanded).to.be.true;
  });

  it.skip('passes expanded props to children', function() {
    var navbar = ReactTestUtils.scryRenderedDOMComponentsWithClass(instance, 'navbar');

    expect(instance.refs.navbar.props.expanded).to.be.true;
  });
});

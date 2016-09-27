'use strict';

var React = require('react'),
        ReactTestUtils = require('react-addons-test-utils');

var chai = require('chai');
var expect = chai.expect;

var ExpandableNavItem = require('../build/components/ExpandableNavItem');

describe('ExpandableNavItem', function() {
  var small =<p>small</p>,
      full = <p>full</p>;

  var smallStyle = {small: 'small'},
      fullStyle = {full: 'full'};

  it('renders small element when expanded is false', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavItem small={small} full={full} expanded={false} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'p').innerHTML).to.equal('small');
  });

  it('renders full element when expanded is false', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavItem small={small} full={full} expanded={true} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'p').innerHTML).to.equal('full');
  });

  it('applies smallStyle when expanded is false', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavItem smallStyle={smallStyle} fullStyle={fullStyle} expanded={false} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'span').style).to.have.a.property('small').that.equals('small')
  });

  it('applies fullStyle when expanded is true', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavItem smallStyle={smallStyle} fullStyle={fullStyle} expanded={true} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'span').style).to.have.a.property('full').that.equals('full')
  });
});

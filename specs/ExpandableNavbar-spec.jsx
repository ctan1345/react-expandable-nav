'use strict';

var React = require('react'),
        ReactTestUtils = require('react-addons-test-utils');

var chai = require('chai');
var expect = chai.expect;

var ExpandableNavbar = require('../build/components/ExpandableNavbar');

describe('ExpandableNavbar', function() {
  it('accepts fullWidth prop as a number', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavbar fullWidth={100} expanded={true} />
    );

    expect(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'navbar').style).to.have.a.property('width').that.equals('100px')
  });

  it('accepts smallWidth prop as a number', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavbar smallWidth={120} expanded={false} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'navbar').style).to.have.a.property('width').that.equals('120px')
  });

  it('accepts fullClass prop as a string', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavbar fullClass={"full"} expanded={true} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'navbar').classList.contains('full')).to.equal(true);
  });

  it('accepts smallClass prop as a string', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavbar smallClass={"small"} expanded={false} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'navbar').classList.contains('small')).to.equal(true);
  });

  it('applies styles to navbar', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavbar style={{paddingTop: 10}} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'navbar').style).to.have.a.property('paddingTop').that.equals('10px')
  })
});

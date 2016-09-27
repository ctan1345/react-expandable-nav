'use strict';

var React = require('react'),
        ReactTestUtils = require('react-addons-test-utils');

var chai = require('chai');
var expect = chai.expect;

var ExpandableNavToggleButton = require('../build/components/ExpandableNavToggleButton');

describe('ExpandableNavToggleButton', function() {
  it('accepts small prop as an element', function() {
    var small = <button className="small"></button>;
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavToggleButton small={small} expanded={false}/>
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button').classList.contains('small')).to.equal(true);
  });

  it('accepts full prop as an element', function() {
    var full = <button className="full"></button>;
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavToggleButton full={full} expanded={true}/>
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button').classList.contains('full')).to.equal(true);
  });

  it('applies smallStyle when expanded is false', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavToggleButton smallStyle={{small: 'small'}} expanded={false}/>
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'span').style).to.have.a.property('small').that.equals('small')
  });

  it('applies fullStyle when expanded is true', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavToggleButton fullStyle={{full: 'full'}} expanded={true}/>
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'span').style).to.have.a.property('full').that.equals('full')
  });

  it('accepts smallClass as a string', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavToggleButton smallClass="small" expanded={false}/>
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'span').classList.contains('small')).to.equal(true);
  });

  it('accepts fullClass as a string', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavToggleButton fullClass="full" expanded={true}/>
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'span').classList.contains('full')).to.equal(true);
  });

  it('calls handleToggle when button is clicked', function() {
    var spy = sinon.spy();
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavToggleButton handleToggle={spy} />
    );
    ReactTestUtils.Simulate.click(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'span'));
    expect(spy.called).be.true;
  });
});

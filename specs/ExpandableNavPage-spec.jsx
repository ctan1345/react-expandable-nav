'use strict';

var React = require('react'),
        ReactTestUtils = require('react-addons-test-utils');

var chai = require('chai');
var expect = chai.expect;

var ExpandableNavPage = require('../build/components/ExpandableNavPage');

describe('ExpandableNavPage', function() {
  it('applies fullStyle when expanded is true', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavPage fullStyle={{full: 'full'}} expanded={true} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div').style).to.have.a.property('full').that.equals('full')
  });

  it('applies smallStyle when expanded is false', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavPage smallStyle={{small: 'small'}} expanded={false} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div').style).to.have.a.property('small').that.equals('small')
  });

  it('applies fullClass when expanded is true', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavPage fullClass={'full'} expanded={true} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div').classList.contains('full')).to.equal(true);
  });

  it('applies smallClass when expanded is false', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavPage smallClass={'small'} expanded={false} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div').classList.contains('small')).to.equal(true);
  });
});

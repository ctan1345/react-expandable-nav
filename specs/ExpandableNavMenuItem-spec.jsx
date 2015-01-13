'use strict';

var React = require('react/addons'),
    ReactTestUtils = React.addons.TestUtils;

var chai = require('chai');
var expect = chai.expect;

var ExpandableNavMenuItem = require('../build/components/ExpandableNavMenuItem');

describe('ExpandableNavMenuItem', function() {
  it('adds bootstrap tooltip attributes when tooltip is defined and expanded is false', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavMenuItem tooltip={"test"} expanded={false} />
    );
    expect(instance.refs.link.props['data-toggle']).to.exist;
  });
  it('does not add bootstrap tooltip attributes when tooltip is defined and expanded is true', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavMenuItem tooltip={"test"} expanded={true} />
    );
    expect(instance.refs.link.props['data-toggle']).not.to.exist;
  });
});

'use strict';

var React = require('react/addons'),
    ReactTestUtils = React.addons.TestUtils;

var chai = require('chai');
var expect = chai.expect;

var ExpandableNavMenuItem = require('../build/components/ExpandableNavMenuItem');

var mocks = require('./helpers/mocks');

describe('ExpandableNavMenuItem', function() {
  var jquery = mocks.jquery;

  it('adds bootstrap tooltip attributes when tooltip is defined and expanded is false', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavMenuItem tooltip={"test"} expanded={false} jquery={jquery} />
    );
    expect(instance.refs.link.props['data-toggle']).to.exist;
  });
});

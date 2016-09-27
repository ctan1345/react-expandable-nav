'use strict';

var React = require('react'),
        ReactTestUtils = require('react-addons-test-utils');

var chai = require('chai');
var expect = chai.expect;

var ExpandableNavMenuItem = require('../build/components/ExpandableNavMenuItem'),
    ExpandableNavMenu = require('../build/components/ExpandableNavMenu');

var mocks = require('./helpers/mocks');

describe('ExpandableNavMenuItem', function() {
  var jquery = mocks.jquery;

  it('adds bootstrap tooltip attributes when tooltip is defined and expanded is false', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavMenuItem tooltip={"test"} expanded={false} jquery={jquery} />
    );
    expect(instance.refs.link.dataset).to.have.a.property('toggle').that.equals('menuitem-tooltip');
  });

  it('accepts active prop and assign "active" class to its when it is true', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavMenu>
        <ExpandableNavMenuItem ref="a" />
        <ExpandableNavMenuItem ref="b" active={false} />
        <ExpandableNavMenuItem ref="c" active={true} />
      </ExpandableNavMenu>
    );

    expect(ReactTestUtils.findRenderedDOMComponentWithTag(instance.refs.c, 'li').classList.contains('active')).to.equal(true);

  });
});

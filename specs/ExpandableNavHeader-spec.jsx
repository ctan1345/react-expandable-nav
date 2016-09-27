'use strict';

var React = require('react'),
        ReactTestUtils = require('react-addons-test-utils');

var chai = require('chai');
var expect = chai.expect;

var ExpandableNavHeader = require('../build/components/ExpandableNavHeader');


describe('ExpandableNavHeader', function() {
  it('accepts fullStyle prop as a string and pass it to nav item', function() {
    var  instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavHeader fullStyle={{full: 'full'}} expanded={true} />
    );

    expect(instance.refs.navItem.props.fullStyle).to.contain({full: 'full'});
  });

  it('accepts smallStyle prop as a string and pass it to nav item', function() {
    var  instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavHeader smallStyle={{small: 'small'}} expanded={false} />
    );
    expect(instance.refs.navItem.props.smallStyle).to.contain({small: 'small'});
  });

  it('accepts fullClass prop as a string', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavHeader fullClass={"full"} expanded={true} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'navbar-header').classList.contains('full')).to.equal(true)
  });

  it('accepts smallClass prop as a string', function() {
    var instance = ReactTestUtils.renderIntoDocument(
      <ExpandableNavHeader smallClass={"small"} expanded={false} />
    );
    expect(ReactTestUtils.findRenderedDOMComponentWithClass(instance, 'navbar-header').classList.contains('small')).to.equal(true)
  });
});

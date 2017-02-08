import jsdom from 'jsdom';
import jquery from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

/* Set up testing environment to run like a browser in the command line,
 for when we run Mocka:*/
// global is the global variable because of my tests are running under node.js
global.document = jsdom.jsdom('<!doctype html><html><body></body></html)>');
global.window = global.document.defaultView;

// Set the (fake) window object that jquery has to be responsible for.
const $ = jquery(global.window);


/* Build 'renderComponent' helper that should render a given react ComponentClass */
function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers,state)}>
      <ComponentClass {...props} />
    </Provider>
  );

  // ReactDOM produces HTML, then we wrap with jquery and return this object
  return $(ReactDOM.findDOMNode(componentInstance));
}


/* Build helper for simulating events */
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}


/* Set up chai-jquery */
chaiJquery(chai, chai.util, $);

export { renderComponent, expect };

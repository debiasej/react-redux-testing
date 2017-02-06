import jsom from 'jsdom';
import jquery from 'jquery';

/* Set up testing environment to run like a browser in the command line,
 for when we run Mocka:*/

// global is the global variable because of my tests are running under node.js
global.document = jsdom.jsdom('<!doctype html><html><body></body></html)>');
global.window = global.document.defaultView;

// Set the (fake) window object that jquery has to be responsible for. 
const $ = jquery(global.window);


/* Build 'renderComponent' helper that should render a given react ComponentClass */





// Build helper for simulating events




// Set up chai-jquery

import jsom from 'jsdom';


// Set up testing environment to run like a browser in the command line:
// global is the global variable because of my tests are running under node.js
global.document = jsdom.jsdom('<!doctype html><html><body></body></html)>');




// Build 'renderComponent' helper that should render a given react ComponentClass





// Build helper for simulating events




// Set up chai-jquery

/**
 *
 * Submit a FORM element. The submit command may also be applied to any element
 * that is a descendant of a FORM element.
 *
 * @param {String} ID ID of a `<form />` WebElement JSON object to route the command to
 *
 * @see  https://code.google.com/p/selenium/wiki/JsonWireProtocol#/session/:sessionId/element/:id/submit
 * @type protocol
 *
 */

var ErrorHandler = require('../utils/ErrorHandler.js');

module.exports = function submit (id) {

    if(typeof id !== 'string' && typeof id !== 'number') {
        throw new ErrorHandler.ProtocolError('number or type of arguments don\'t agree with submit protocol command');
    }

    var requestOptions = {
        path: '/session/:sessionId/element/:id/submit',
        method: 'POST'
    };

    requestOptions.path = requestOptions.path.replace(/:id/gi, id);

    return this.requestHandler.create(requestOptions);

};
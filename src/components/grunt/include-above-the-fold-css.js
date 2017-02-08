// this is used for the grunt task 'processhtml'.
// includes above-the-fold css

'use strict';

module.exports = function (processor) {
  processor.registerBlockType('above-the-fold-css', function (content, block, blockLine, blockContent) {
    var fs = require('fs');
    var fileContent = fs.readFileSync( block.asset ).toString();
    var html = '<style type="text/css">\r\n/* Lovely above-the-fold css */\r\n' + fileContent + '\r</style>';
    var result = content.replace(blockLine, html);
    return result;
  });
};
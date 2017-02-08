// this is used for the grunt task 'processhtml'.
// replaces one value for another

'use strict';

module.exports = function (processor) {
  processor.registerBlockType('async-js', function (content, block, blockLine, blockContent) {
    var blockJS = "<script async defer type=\"text/javascript\" src=\""+block.asset+"\"></script>";
    
    return content.replace(blockLine, blockJS);
  });
};
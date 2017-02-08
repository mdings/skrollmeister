// this is used for the grunt task 'processhtml'.
// replaces one value for another

'use strict';

module.exports = function (processor) {
  processor.registerBlockType('async-css', function (content, block, blockLine, blockContent) {
    var blockJS = "<script type=\"text/javascript\">\rvar ss = window.document.createElement(\"link\"),\rref = window.document.getElementsByTagName(\"head\")[0];\rss.rel = \"stylesheet\";\rss.href = \"";
    blockJS += block.asset;
    blockJS += "\"\rss.media = \"only x\";\rref.parentNode.insertBefore(ss, ref);\rsetTimeout( function(){\r// set media back to all so that the stylesheet applies once it loads\rss.media = \"all\";\r}, 0);\r</script>\r<noscript>\r<link rel=\"stylesheet\" href=\"";
    blockJS += block.asset;
    blockJS += "\">\r</noscript>";
    
    return content.replace(blockLine, blockJS);
  });
};
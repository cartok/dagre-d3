var util = require("../util");

module.exports = addHtmlLabel;

function addHtmlLabel(root, node) {
  // add foreign object
  var fo = root
    .append("foreignObject")
    .attr("width", "100000");

  // add xhtml div
  var div = fo.append("xhtml:div");
  div.attr("xmlns", "http://www.w3.org/1999/xhtml");

  // append html xhtml div 
  var content = document.adoptNode(node.label)
  div.node().appendChild(content);
  util.applyStyle(div, node.labelStyle);
  div.style("display", "inline-block");
  div.style("white-space", "nowrap"); // fix for firefox

  // set fo width and height depending on html content 
  var client = div.node().getBoundingClientRect();
  fo
    .attr("width", client.width)
    .attr("height", client.height); 

  return fo;
}

var util = require("../util");
var $ = require("jquery");

module.exports = addHtmlLabel;


function addHtmlLabel(root, node) {
  // add foreign object
  var fo = root
    .append("foreignObject")
    .attr("width", "100000");

  // add xhtml:div
  var div = fo.append("xhtml:div");
  div.attr("xmlns", "http://www.w3.org/1999/xhtml");

  // append html xhtml:div
  switch(typeof node.label){
    case "string":
      div.html(node.label)
      break
    case "function":
      div.insert(node.label)
      break
    case "object":
      div.node().appendChild($(node.label).clone(true,true));
      break
    default: throw new Error("node label type is invalid.")
  } 

  // apply style
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

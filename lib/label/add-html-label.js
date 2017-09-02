var util = require("../util");

module.exports = addHtmlLabel;

function addHtmlLabel(root, node) {
  var fo = root
    .append("foreignObject")
    .attr("width", "100000");

  var div = fo.append("xhtml:div");
  div.attr("xmlns", "http://www.w3.org/1999/xhtml");

  // var label = node.label;
  // switch(typeof label) {
  //   case "function":
  //     div.append(label);
  //     break;
  //   case "object":
  //     // Currently we assume this is a DOM object.
  //     div.append(function() { return label; });
  //     break;
  //   default: div.html(label);
  // }

  // div.node().appendChild(node.label.cloneNode(true));

  div.node().appendChild(node.label);
  util.applyStyle(div, node.labelStyle);
  div.style("display", "inline-block");
  div.style("white-space", "nowrap"); // Fix for firefox

  var client = div.node().getBoundingClientRect();
  // console.warn("CHECK OUTPUT")
  // console.log(client)
  // console.log(div.node())
  // console.log(div.nodes())

  fo
    .attr("width", client.width)
    .attr("height", client.height); 

  return fo;
}

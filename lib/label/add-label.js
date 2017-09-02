var addTextLabel = require("./add-text-label"),
    addHtmlLabel = require("./add-html-label"),
    addSVGLabel  = require("./add-svg-label");

module.exports = addLabel;

function addLabel(root, node, location) {
  var label = node.label;
  var labelSvg = root.append("g");

  // Allow the label to be a string, a function that returns a DOM element, or
  // a DOM element itself.
  switch(node.labelType){
    case "svg":
      addSVGLabel(labelSvg, node);
      break;
    case "html":
      addHtmlLabel(labelSvg, node);
      break;
    case "text":
      addTextLabel(labelSvg, node);
      break;
    default:
      addTextLabel(labelSvg, node);
  }

  var labelBBox = labelSvg.node().getBBox();
  var y;
  switch(location) {
    case "top":
      y = (-node.height / 2);
      break;
    case "bottom":
      y = (node.height / 2) - labelBBox.height;
      break;
    default:
      y = (-labelBBox.height / 2);
  }
    
  labelSvg.attr("transform",
                "translate(" + (-labelBBox.width / 2) + "," + y + ")");

  return labelSvg;
}

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
function render(element, container) {
  var dom = element.type === "TEXT_ELEMENT" ? document.createTextNode(element.props.nodeValue) : document.createElement(element.type);
  console.log("🚀 ~ render ~ dom:", dom);
  container.appendChild(dom);
}
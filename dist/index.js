"use strict";

var _createElement = require("./lib/createElement.js");
var _render = require("./lib/render.js");
var RohanReact = {
  createElement: _createElement.createElement,
  render: _render.render
};
var element = RohanReact.createElement("div", {
  id: "app"
}, RohanReact.createElement("h1", null, "Hello, My React-like Library!"), RohanReact.createElement("button", {
  onClick: function onClick() {
    return alert('You clicked me!');
  }
}, "Click Me"));
var container = document.getElementById('root');
RohanReact.render(element, container);
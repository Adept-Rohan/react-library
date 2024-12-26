import { createElement } from './lib/createElement.js';
import { render } from './lib/render.js'


const RohanReact = {
    createElement,
    render
};

/** @jsx RohanReact.createElement */
const element = (
    <div id="app">
        <h1>Hello, My React-like Library!</h1>
        <button>Click Me</button>
    </div>
);

const container = document.getElementById('root');
RohanReact.render(element, container)


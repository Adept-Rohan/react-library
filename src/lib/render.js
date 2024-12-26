export function render(element, container) {
    // Check if the element is a text element or a regular HTML element
    const dom =
        element.type === "TEXT_ELEMENT"
            ? document.createTextNode(element.props.nodeValue)
            : document.createElement(element.type);

    // Add properties (like id, class, etc.) to the element
    const isProperty = key => key !== "children";
    Object.keys(element.props).filter(isProperty).forEach(name => {
        dom[name] = element.props[name];
    });

    // Render children recursively
    element.props.children.forEach(child => render(child, dom));

    // Append the current element to the container
    container.appendChild(dom);
}


export function render(element, container) {
    // Creating a DOM element based on it's type.
    const dom = element.type === "TEXT_ELEMENT" ? document.createTextNode(element.props.nodeValue) : document.createElement(element.type)

    // Assigning elements props to the node 

    const isProperty = key => key !== "children"
    Object.keys(element.props).filter(isProperty).forEach(name => dom[name] = element.props[name])

    // All the children are now rendered recursively
    element.props.children.forEach(child => render(child, dom))

    // Appending all the node inside the container 
    container.appendChild(dom)
}
function customRender(reactElement,container){

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute("href",reactElement.props.href)
    domElement.setAttribute("target",reactElement.props.target)

    container.appendChild(domElement)
}

console.log("Script is running!");

const reactElement = {
    type: "a",
    props: {
        href: "http://google.com",
        target: "_blank"
    },
    children: "click me to visit google"
}
const mainContainer = document.querySelector("#root");
// const anchorElement = '<a href="http://google.com" target="_blank">click me to visit google</a>';
// mainContainer.innerHTML = anchorElement;



customRender(reactElement,mainContainer);

function customRender(re, container) {
    const domElement = document.createElement(re.type)
    domElement.textContent = re.children
    for (const prop in  re.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, re.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: { 
        href: "https://www.google.com", 
        target: '_blank'
    },
    children: "Click here to visit to google"
}



const mainContainer = document.querySelector("#root")

customRender(reactElement, mainContainer)
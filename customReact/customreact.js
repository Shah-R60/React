function customRender(reactElement,container)
{
     // const domElement = document.createElement(reactElement.type)
     // domElement.innerHTML = reactElement.childred
     // domElement.setAttribute('href',reactElement.props.href)
     // domElement.setAttribute('target',reactElement.props.traget)
     // container.appendChild(domElement);
     
     const domElement = document.createElement(reactElement.type)
     domElement.innerHTML = reactElement.childred

     for (const prop in reactElement.props) {
         domElement.setAttribute(prop,reactElement.props[prop])
     }
     container.appendChild(domElement);
}

const reactElement = {
     type:'a',
     props:{
          href:'https://google.com',
          traget:'_blank'
     },
     childred:'Click me to visit google'
}


const mainContainer = document.querySelector(".root");

customRender(reactElement,mainContainer);


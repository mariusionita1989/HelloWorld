let myMessage: string = 'Hello, World!';
// create a new heading 1 element
let heading = document.createElement('h1');
heading.textContent = myMessage;
// add the heading the document
document.body.appendChild(heading);
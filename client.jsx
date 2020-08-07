const React= require('react');
const ReactDom= require('react-dom');

const WordRelay =require('./WordRelay');
const Gugudan = require('./Gugudan')

ReactDom.render(<Gugudan></Gugudan> ,document.querySelector('#root'))
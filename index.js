// 1. Object
const nodejs = {
  name: 'Node.js',
  type: 'JavaScript runtime environment'
};
// same as 
// const {name, type} = nodejs;


// TODO: Destructure the object 'nodejs'

console.log(nodejs.name); // <= Node.js
console.log(nodejs.type); // <= JavaScript runtime environment

// 2. Nested Object
const js = {
  name: 'JavaScript',
  type: 'programming language',
  version: 'ES6',
  tools: {
    frameworks: {
      framework1: 'AngularJS',
      framework2: 'Vue.js'
    },
    libraries: {
      library1: 'jQuery',
      library2: 'React'
    }
  }
};

// TODO: Destructure the nested object 'js'

console.log(js.tools.frameworks.framework1); // <= AngularJS
console.log(js.tools.frameworks.framework2); // <= Vue.js

// 3. Arrays
const languages = ['HTML', 'CSS', 'JavaScript'];

// TODO: Destructure the array 'languages'

//console.log(languages.length); // <= HTML CSS JavaScript
//languages.forEach(console.log)
 console.log(languages[0], languages[1], languages[2])






console.log(languages[0]); // <= HTML

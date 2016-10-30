// Coding in REACT JSX

var React = require('react');
var ReactDOM = require('react-dom');

// We must use className instead of class for an attribute name
var myDiv = <div className="big">I AM A BIG DIV</div>
ReactDOM.render(myDiv, document.getElementById('app'));

// Open tags like <img> and <input> need a closing tag slash. In JSX, you 
// have to include the slash. If you write a self-closing tag
// in JSX and forget the slash, you will raise an error
var profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />
    <article>
      I LIKE TO SIT
      <br />
      JENKINS IS MY NAME
      <br />
      THANKS HA LOT
    </article>
  </div>
);

// A regular JavaScript, written inside of a JSX expression, 
// written inside of a JavaScript file.
var React = require('react');
var ReactDOM = require('react-dom');

// This would print "2 + 3" to the screen...not 5. JSX doesn't add numbers.
ReactDOM.render(<h1>2 + 3</h1>, document.getElementById('app'));

// However, add a pair of curly braces to the code and it will treat it as an expression.
// They are markers that signal the beginning and end of a JavaScript injection into JSX.
// This would print "5" to the screen.
ReactDOM.render(<h1>{2 + 3}</h1>, document.getElementById('app'));


var React = require('react');
var ReactDOM = require('react-dom');

// This will display 2 + 3 = 5
var math = <h1>2 + 3 = {2 + 3}</h1>
ReactDOM.render(math, document.getElementById('app'));



// When you inject JavaScript into JSX, that JavaScript is part of 
// the same environment as the rest of the JavaScript in your file.
// That means that you can access variables while inside of a JSX expression, 
// even if those variables were declared on the outside.

var React = require('react');
var ReactDOM = require('react-dom');

var theBestString = 'tralalalala this fun!';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));


// Working with conditionals in ReactJS
// This works, because the words if and else are not injected 
// in between JSX tags. The if statement is on the outside, and 
// no JavaScript injection is necessary.
// This is a common way to express conditionals in JSX.

var React = require('react');
var ReactDOM = require('react-dom');

if (user.age >= drinkingAge) {
  var message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  var message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );
}

ReactDOM.render(
  message, 
  document.getElementById('app')
);

// Another example of running conditionals using a random number generator
// Each time the browser is refreshed several times, the picture changes 
var React = require('react');
var ReactDOM = require('react-dom');

function coinToss () {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

var pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

// if/else statement begins here:
if (coinToss() == 'heads') {
  var img = <img src={pics.kitty} />;

} else {
  var img = <img src={pics.doggy} />;
};

ReactDOM.render(
  img, 
  document.getElementById('app')
);

// Same program as above except using the ternary operator
var React = require('react');
var ReactDOM = require('react-dom');

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

var pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

// using the ternary expression format
var img = <img src={pics[coinToss() == 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);
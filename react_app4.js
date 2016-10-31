// Like the ternary operator, && is not React-specific, but it shows up in React surprisingly often.
// && works best in conditionals that will sometimes do an action, but other times do nothing at all.

// Example 1
var tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);

// Example 2
var React = require('react');
var ReactDOM = require('react-dom');

// judgmental will be true half the time.
var judgmental = Math.random() < 0.5;

var favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>} 
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);
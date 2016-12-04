// The array method .map comes up often in React. 
// We call .map on this array of strings, and the .map call returns a new array of <li>s.

var React = require('react');
var ReactDOM = require('react-dom');

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person){
  // return statement goes here:
return <li>{person}</li>;
});

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLIs}</ul>, document.getElementById('app'))


// NOTE: JSX <li>s don't have to be in an array like this, but they can be.
// This is fine in JSX, not in an explicit array:

<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>

// This is also fine!

var liArray = [
  <li>item 1</li>, 
  <li>item 2<li>, 
  <li>item 3</li>
];

// When you make a list in JSX, sometimes your list will need to include something called keys
// A key is a JSX attribute. The attribute's name is key. The attribute's value should be 
// something unique, similar to an id attribute.
// Not all lists need to have keys. A list needs keys if either of the following are true:

// The list-items have memory from one render to the next. For instance, when a to-do list renders, 
// each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.
// A list's order might be shuffled. For instance, a list of search results might be shuffled from 
// one render to the next. If neither of these conditions are true, then you don't have to worry 
// about keys. If you aren't sure then it never hurts to use them!

<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>


// If we want to automatically index a key, we can do this. Check out how "i" is incrementd with a key value
var React = require('react');
var ReactDOM = require('react-dom');

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person, i){
  // we index the key "person" here.
return <li key={'person_' + i} >{person}</li>;
});

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLIs}</ul>, document.getElementById('app'))

//
// It is possible to write React code without JSX code. 
// The following JSX expression:
//
var h1 = <h1>Hello world</h1>;

// Can be rewritten without JSX, like this:
var h1 = React.createElement("h1", null, "Hello, world");

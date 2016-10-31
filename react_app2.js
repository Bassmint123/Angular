// When writing JSX, it's common to use variables to set attributes.
var React = require('react');
var ReactDOM = require('react-dom');

// Use a variable to set the `height` and `width` attributes:

var sideLength = "200px";

var panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);


// Object properties are also often used to set attributes
// Here we use the objects from pics
var pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

var panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

var owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

var owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
);

// Use a variable to display an image
var React = require('react');
var ReactDOM = require('react-dom');

var goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
var gooseImg = <img src={goose} />;

ReactDOM.render(
  gooseImg,
  document.getElementById('app')
);

// An event listener attribute's name should be something like onClick or onMouseOver: the 
// word on, plus the type of event that you're listening for. You can see a list of 
// valid event names here.
function myFunc () {
  alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />
// An event listener attribute's value should be a function. The above example 
// would only work if myFunc were a valid function that had been defined elsewhere:
// Note that in HTML, event listener names are written in all lowercase, such 
// as onclick or onmouseover. In JSX, event listener names are written in camelCase, 
// such as onClick or onMouseOver.


// Working with event handlers: Here I call the makeDoggy function to execute with the onClick attribute of <img /> element
// The kitten picture turns in to a doggy picture.

var React = require('react');
var ReactDOM = require('react-dom');

function makeDoggy (e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

var kitty = (
	<img onClick={makeDoggy}
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById('app'));


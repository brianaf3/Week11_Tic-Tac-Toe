//selecting element by id
let p = $('#test');

//slecting element by class
let div = $('.my-class');

//selcting element by tag
let ul = $('ul');

console.log(p);
console.log(div);
console.log(ul);

// p is the elemnt selected and 'text' is a built in method on the object
console.log(p.text()); 
// If an argument is passed in it will set the text, if no argument it returns the text
p.text('New Text');
// '.val' will set the value of the input
//('input').val('New Value');

//'.attr is a method that can change an attribute, takes 2 parameters 1.what the attribute is 2. its value
$('input').attr('placeholder', 'Placeholder Text');


//ADDING ELEMENTS TO THE DOM

// prepend and append add content to an existing element ex) into the div
div.prepend('<p>prepended paragraph</p>');
div.append('<p>appended paragraph</p>');

//before and after add elements/content right before or right after an existing element ex) the div
div.before('<p>paragraph that was added before the div</p>');
div.after('<p>paragraph added after the div</p>');


//REMOVING ELEMENTS FROM THE DOM

//the remove method deletes elements and it children from the DOM
ul.remove();
//the empty method removes all the children of the selected element from the dom
div.empty();
//'Hide & show" method hides an element from being displayed but not removed all the way from the DOM
$('input').hide();
//built in 'setTimeout' function takes a function as a parameter
setTimeout(() => $('input').show(), 2000);

//TESTING GET AND POST METHODS
//sending an http requst to the url and its going to respond to some data and log out the data
$.get('https://regres.in/api/users/2', (data) => console.log(data));

//post request
$.post('https://regres.in/api/users', {
    name: 'Tommy',
    job: 'Front End Software Developer'
}, (data) => console.log(data));
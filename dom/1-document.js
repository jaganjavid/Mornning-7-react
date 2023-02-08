// With the object model, JavaScript gets all 
// the power it needs to create dynamic HTML:

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

let val;

val = document;
val = document.all;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].title;
val = document.links[0].classList; // DOMTOKELIST
val = document.links[0].classList[0];

val = document.images;
val = document.images[0];
val = document.images[0].src;

val = document.scripts;
val = document.scripts[0].src;


let scriptslist = document.scripts;

for(let i = 0; i<scriptslist.length; i++){
   console.log( scriptslist[i].src);
}

console.log(scriptslist);

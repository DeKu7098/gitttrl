// EXAMINE THE DOC OBJECT //

console.dir(document);

console.log(document.url);
console.log(document.domain);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent = 'Heyyyy';
console.log(document.forms);
console.log(document.links);
// GETELEMENT BY ID //
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Goodbye';
headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 2.5px #000';
var add = document.getElementById('main h2');
add.style.fontWeight = 'bold';




// creating new id for "add items" //

var main = document.getElementById('title1');
console.log(main);
main.style.backgroundColor = 'green';


// changing the font style and color of Add Items //


main.style.fontWeight = 'bold';
main.style.color = 'green';

// GET ELEMENTS BY CLASS NAME //
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor = 'green';

 for(var i=0;i < items.length; i++)
 {
    //items[i].style.backgroundColor = 'cyan';
    items[i].style.fontWeight = 'bold';
 }

// QUERYSELECTOR //

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';

// QUERYSELECTOR ALL //

var odd = document.querySelectorAll('li:nth-child(odd');
for(var i = 0; i < odd.length; i++)
{
  odd[i].style.backgroundColor = 'green';
}

// Traversing DOM //
var itemList = document.querySelector('#items');
// parentNode //
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';

// parentElement //

console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

// childNodes //
console.log(itemList.childNodes);

// children // 
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = '#f4f4f4';

// firstChild // 
console.log(itemList.firstChild);

// firstElementChild //
console.log(itemList.firstElementChild);

// lastChild //
console.log(itemList.lastChild);

// lastElementChild // 

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hey There';

// nextSibling //
console.log(itemList.nextElementSibling);

// previousElementSibling // 
console.log(itemList.previousElementSibling);

 // creatElement //
var newDiv = document.createElement('div');

// add class // 
newDiv.className = 'Hello';

// add id //
newDiv.id = 'Hello1';

// add attribute //
newDiv.setAttribute('title', 'Hello Div');

// Create a textNode //
var newDivText = document.createTextNode('Hello World');

// add text to div //
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');


console.log(newDiv);

container.insertBefore(newDiv, h1);

// createElement // 
var newItem = document.createElement('item');

// add class // 
newItem.className = 'Hello';

// // add id //
 newItem.id = 'Hello1';

// // add attribute //
newItem.setAttribute('title' ,'Hello');

// // Create textNode // 
 var newItemText = document.createTextNode('Hello');

// // add text to div // 
newItem.appendChild(newItemText);

var container = document.querySelector('ul .container');

var li = document.querySelector('ul li');
// console.log('newItem');
newItem.insertBefore(newItem, li);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');


// form submit event //
form.addEventListener('submit', addItem);
delete event //
itemList.addEventListener('click', removeItem);
// Filter event //
filter.addEventListener('keyup', filterItems);

 // add item //
function addItem(e)
{
  e.preventDefault();
     console.log(1);
   //  get input value //

  var newItem = document.getElementById('item').value;

   // create new li //

   var li = document.createElement('li');

    // add class name //


   li.className = 'lis-group-item';
     console.log(li);
    //  add textNode with input value // 

   li.appendChild(document.createTextNode(newItem));

    // create delete button element //

  var deleteBtn = document.createElement('button');

     // create edit button //
  var editBtn = document.createElement('button');

   // add classes to delete btn //

  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // add classes to edit button //
  editBtn.className = 'btn btn-danger btn-sm float right float-right delete ';

       // append textNode //

  deleteBtn.appendChild(document.createTextNode('x'));
     //  append textNode // 
      editBtn.appendChild(document.createTextNode('edit'));

       // append button to li

  li.appendChild(deleteBtn);
     // append button to li //
     li.appendChild(editBtn);

     //  append li to list //

   itemList.appendChild(li);
  // append li to list //
   itemList.appendChild(li);
}

 // remove item //
function removeItem(e)
{
   if(e.target.classList.contains('delete'))
   {
       console.log(1);
    if(confirm('Are you sure?'))
    {
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
   }
}

 // Filter items //

function filterItems(e)
{
  // covert text to lower text //

   var text = e.target.value.toLowerCase();
   console.log(text);
  var items = itemList.getElementsByTagName('li');
  // covert to an array //
  Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
     console.log(itemName);
     if(itemName.toLowerCase().indexOf(text) != -1)
     {
         item.style.display = 'block';
     }
     else
     {
         item.style.display = 'none';
     }

  });
}







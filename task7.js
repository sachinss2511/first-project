// TRAVERSING THE DOM
var itemList = document.querySelector('#items')
// // PARENT NODE
// console.log(itemList.parentNode)
// // itemList.parentNode.style.backgroundColor ='sky blue'
// console.log(itemList.parentNode.parentNode.parentNode)

// parentElement

// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor ='sky blue'
// console.log(itemList.parentElement.parentElement.parentElement)

// // CHILD NODES
// console.log(itemList.childNodes)

// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = 'yellow'


// firstChild
// console.log(itemList.firstChild)
// console.log(itemList)

// firstelement child
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'hellow'

// last child
// console.log(itemList.lastChild)

// last element child
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent= 'hellu ji kese ho'

// nextsibiling
//  console.log(itemList.nextSibling)

// nextsibiling
// console.log(itemList.nextElementSibling)

// previous Sibling
// console.log(itemList.previousSibling)

// prev ele sib
// console.log(itemList.previousElementSibling)


// create element

// // create a div
// var newDiv = document.createElement('div')

// // add class
// newDiv.className='hi'

// // add id
// newDiv.id = 'hi2'

// // add attribute
// newDiv.setAttribute('title','hello div')

// // create text node
// var newDivText = document.createTextNode('hello world here is the text')

// // add text to div
// newDiv.appendChild(newDivText)

// var afterContainer = document.querySelector('header .container')
// var h1 = document.querySelector('header h1')

// console.log(newDiv)
// newDiv.style.fontSize='30px'

// afterContainer.insertBefore(newDiv,h1)


// adding hello before item1
var newDiv2 = document.createElement('div')
newDiv2.innerHTML = 'hello'

var cardBody = document.querySelector('div .list-group')
var h1 = document.querySelector('ul li')

console.log(newDiv2)
newDiv2.style.fontSize='30px'

cardBody.insertBefore(newDiv2,h1)


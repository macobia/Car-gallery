// DOM MANIPULATION
// SELECTING ELEMENT USING DOM 

// select element by id 
// const element = document.getElementById('title')
// console.log(element)

// select element by name
// const element = document.getElementsByName('gender')
// console.log(element)

// select element by tag name
// const element = document.getElementsByTagName('h1')
// console.log(element)

// select element by class name
// const element = document.getElementsByClassName('title')
// console.log(element)

// const element = document.getElementById('container')
// element.getElementsByClassName('title')
// console.log(element)

// const element = document.querySelectorAll("#title")
// console.log(element)

// GETTING PARENT ELEMENT/NODE FROM CHILD ELEMENT/NODE 
// const parentElement = document.querySelector('.title')
// console.log(parentElement.parentNode)

// GETTING CHILD ELEMENT/NODE FROM PARENT ELEMENT/NODE 
// const childElement = document.querySelector('#container')
// console.log(childElement.lastElementChild)

// const newElement = document.createElement('p')
// newElement.textContent = "fish is a fish"
// document.body.appendChild(newElement)
// console.log(newElement)

// Manipulating html element's styles

// const styleElement = document.getElementById('title')
// styleElement.style.cssText += "background-color: white; color: green;"

// ADDING AND REMOVING CLASSES
// const removeElement = document.getElementById('container')
// removeElement.removeChild(removeElement.firstElementChild)

const addElement = document.getElementById('container')
const result = document.createElement('p')
result.textContent = 'Hello world4'
addElement.insertBefore(result, addElement.lastElementChild)



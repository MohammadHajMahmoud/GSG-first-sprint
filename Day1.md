# Day 1: DOM (Document Object Model)

## What is the DOM?

- The Document Object Model (DOM) is a programming interface provided by web browsers that represents the items on a web page whether its a header or a div or many others
- Using the dom we can modify, edit and add items to the page

## The DOM Tree

the browser creates a DOM tree that represents the page's structure. Each element in the HTML becomes a node in the DOM tree.

For example this snippet from the course :

```html
<!DOCTYPE html>
<html lang=en-US>
<head>...</head>
<body>
 <header>...</header>
<div id="board">...</div>
</body>
</html>
```
in tree structure it will look like this 
```
- Document
  - html
    - head
      - ...
    - body
      - header
        - ...
      - div (id="board")
        - ...
```
## Finding elemments in a web page
```javascript

document.title //outputs the title of the doc

document.body // outputs the body element

document.body.children // outputs an HTMLCollection with the items in the page

document.getElementById("board")===document.querySelector("#board")// outputs the first element that
 the dom finds with an id of "board"

document.getElementsByTagName("h1")===document.querySelectorAll// outputs all the items with h1 tag

docuement.getElementsByClassName("player")===document.querySelectorAll(".player") // outputs all items with the class of player

```
## Length and .textContent
```javascript
docuemnt.getElementsByClassName("player").length// outputs number of elemnts which have player class

document.getElementByid("pl-name").textContent // outputs the Text/string of the elemen that have an id of "pl-name"

document.getElementByid("pl-name").textContent= "mohammad" //replaces the text in pl-name element to mohammad

document.getElementByid("pl-name").append("& loves one piece") //concats or adds the statment to the text "mohammad"
```
## Finding Elements Excercise
```javascript
//Get the the elements with p tag
docuemnt.getElementsByTagName(p)
//find X text
document.querySelector(#pl-symbol).textContent
//get the number of squares in the board
document.getElementsByClassName(.square).length
// get the text "a game you know"
document.querySelector("h2").textContent
```
## Changing web page Exercise
```javascript
//change player name
document.querySelectorAll("#pl-name").textContent = "goofy"
//swap players symbols
document.getElementBy("p1-symbol").textContent="O"
document.getElementBy("p1-symbol").textContent="X"
//change the subtitle text by adding something to it
document.querySelector("header h2").append("KEK")
```

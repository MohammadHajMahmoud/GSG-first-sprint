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
document.getElementById("board")==document.querySelector("#board")// outputs the first element that the dom finds with an id of "board"
```

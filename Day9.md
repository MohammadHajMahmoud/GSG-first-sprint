# Asynchronous JS
- setTimeout sets a timer in the browser to manage asynchronous calls and when the timer is complete the call(function) goes to the call stack
  Example
```javascript
function printHello(){
    console.log("hello")
}
function blockFor1Sec(){
    //blocks in the javascript thread for 1 sec
}
setTimeout(printHello,0)
blockFor1Sec()
console.log("me first")
```
Explaination : setTimeout(printHello, 0); is called. This is an asynchronous function that schedules the printHello function to be executed after 0 milliseconds. it doesn't immediately execute printHello because it's designed to be non-blocking.
blockFor1Sec(); is called. This function blocking the JavaScript thread for 1 second. This means that the main thread is occupied and can't do any other tasks during this time.
hile the blockFor1Sec function is running, the scheduled printHello function remains in the background, waiting for its turn to be executed.
After blockFor1Sec finishes running, the main thread becomes free. The event loop notices that there's a task in the queue (the printHello function) waiting to be executed.
console.log("me first") is executed and "me first" is printed in the console 
The event loop picks up the printHello function from the queue and executes it. The "hello" message is printed to the console.
## Event loop
- store asynchronus calls in a queue waiting for their timer to finish
- checks whether the call stack is empty
- when the call stack is empty the event loop sends the ready to execute functions/calls by timer order
  
# Promises 
- a promise is a plceholder object
```javascript
function display (data) {
  console.log(data)
}
const futureData = fetch(/api/)
futureData.then(display)
console.log("me first")
```
The "me first" message is logged to the console.
The fetch request is sent to the server to fetch data from /api/.
The console.log(data) inside the display function will log the fetched data to the console once the promise is """"resolved"""".
what mainly happend was the futureData was defined like an object place holder for the fetch response so once its resloved it will be storing it .
- then() method is used for promise handling so in our code it spacified that the display function should be executed when the futureData Promise is resolved
```javascript
function sayHi(){
  console.log("hi")
}
setTimeout(sayHi,0)
function display (data) {
  console.log(data)
}
const futureData = fetch(/api/)
futureData.then(display)
console.log("me first")
```
in this code the promise was executed and data was displayed before saying "hi" because there is a microtask queue takes promises  and this que is getting checked by the event loop

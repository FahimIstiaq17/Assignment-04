### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: 
getElementById:
It is unique and only one element have that ID.

getElementsByClassName:
Many elements have that same class and it selects all elements with the class name and returns a collection.

querySelector:
It selects only the first element that matches a css selector like Id,class,tag,div..

querySelectorAll:
querySelectorAll selects all elements that match a CSS selector and returns a list.


### 2. How do you create and insert a new element into the DOM?
Answer:
First we need to create an element using document.creatElement() , then add the content using .textContent , and then insert that content/element into DOM by using appendChild()

### 3. What is Event Bubbling? And how does it work?
Answer:
Event Bubling is an event that starts bubling form the clicked element and then moves upward to its parent elements.
it works like "from child -> parent -> grandparent -> document."

### 4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
In JavaScript event Delegation is adding one event listener to a parent element instead of adding event listeners to many child elements.

It's useful because it needs less code to write, gives better performance, esier to manage and maintain. 

### 5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault() usually stops the default behavior of the browser.
And stopPropagation() stops the event from bubling to parent element.
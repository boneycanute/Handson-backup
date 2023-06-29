
### Javascript Remove Child and Append Child Selector Live Handson


#### Instructions

1. You need to write a function named as `addItem` which defines as,
   select the ul element having id `list` using id or query selector,
   create a new `li` element using  `createElement`,
   create a new text node using `createTextNode` having text as "New Item"
   Append the new created element to the end of ul list using `appendChild`.

2. You need to write one another function named as `removeItem` which defines as,
   select the ul element having id `list` using id or query selector,
   select the first `li` element of unordered list,
   Remove the first child of `ul` by using `removeChild` and passing the selected element in above step.

#### Test Cases:

1. This test case checks that a new List item with `li` tag having text as "New Item" is added at the end in unordered list.
2. This test case checks that the first `li` element child has been removed from the unordered list.
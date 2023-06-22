
###  List Practice Handson 1

In this project, we have to write code for practice List in Html as per the given instructions below:

#### Instructions:

1. Create an ordered list of type as `I` using `ol` tag.
2. Add five list items using `li` tag having text as "ol item1", "ol item2", "ol item3", "ol item4", "ol item5" resp.
3. Now, create an unordered list below the above list using `ul` tag of type as `disc` and 
4. Add five list items using `li` tag having text as "ul item1", "ul item2", "ul item3", "ul item4", "ul item5" resp.
5. Now create a description list using `dl` tag and 
6. Add add a description term using `dt` tag having text as "Data Term".
7. Now add a data definition using `dd` tag having text as "Data Definition".
8. Again, Add add a description term using `dt` tag having text as "Java".
9. Now add a data definition using `dd` tag having text as "is a programming language and platform".
10. Again, Add add a description term using `dt` tag having text as "Javascript".
11. Now add a data definition using `dd` tag having text as "is a scripting language".
12. Again, Add add a description term using `dt` tag having text as "SQL".
13. Now add a data definition using `dd` tag having text as "is a query language".
14. Add an ordered list outside the description list using `ol` tag of type as `A` and add `reversed` attribute to it.
15. Add five list items inside above created ordered list using `li` tag, having text as "reversed ol item1", "reversed ol item2", "reversed ol item3", "reversed ol item4", "reversed ol item5" resp.
16. Add an ordered list outside the above ordered list using `ol` tag of type=`1`.
17. Now add an ordered list of type=`A` wrapped inside a `li` tag.
18. Add three list items inside the above list using `li` tag having content as "item1" , "item2" , "item3" resp.
19. Now add a description list below the above list as second child of the ordered list of type=`1` wrapped inside a `li` tag.
20. Add a description term using `dt` tag having text as "title1".
21. Add data definition tag below the above `dt` using `dd` tag having text as "definition1".
22. Again, add a description term using `dt` tag having text as "title2".
23. Add data definition tag below the above `dt` using `dd` tag having text as "definition2".
        

Follow all the given instructions and pass all the tests to complete this project.

#### Test Cases:

Below is the list of test cases your code will be tested on:
1. The first test case have the following checks:
Check if the HTML structure has a `body` element with 5 children.
Check if there is an ordered list `ol` with type as `I`.
Check if the ordered list has 5 list items `li` as children.
Check the content of each list item as  "ol item1", "ol item2", "ol item3", "ol item4", "ol item5" resp.

2. The second test case have the following checks:
Check if there is an unordered list `ul` with type as `disc`.
Check if the unordered list is the second child of the `body` element.
Check if the unordered list has 5 lists `li` as children.
Check the content of each list item as "ul item1", "ul item2", "ul item3", "ul item4", "ul item5" resp.
3. The third test case have the following checks:
Check if there is a description list `dl` after the unordered list created above.
Check if the description list has 8 children: alternating `dt` and `dd` elements.
Check the content of each `dt` and `dd` element.
4. The fourth test case have the following checks:
Check if there is an ordered list `ol` with type as `A` and `reversed` attribute.
Check if the ordered list is the fourth child of the `body` element.
Check if the ordered list has 5 list items `li` as children.
Check the content of each list item as "reversed ol item1", "reversed ol item2", "reversed ol item3", "reversed ol item4", "reversed ol item5" resp.
5. The fifth test case have the following checks:
Check if there is an ordered list `ol` with type as `A` and `reversed` attribute.
Check if there is an `ol` element with type as `1` after the ordered list.
Check if the `ol` element with type as `1` has 2 list items `li` as children.
Check if the first list item contains an ordered list `ol` with type `A` as a child.
Check if the second list item contains a description list `dl` as a child.
Check the content of each nested list item and description list elements.
6. Check the complete given structure by combining all the checks from previous test cases.
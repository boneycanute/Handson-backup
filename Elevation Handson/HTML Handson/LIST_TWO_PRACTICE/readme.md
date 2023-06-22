
###  List Practice Handson 2

In this project, we have to write code for practice List in Html as per the given instructions below:

#### Instructions:

1. Create a Ordered List that is reversed 
    - Create  a li
        - that consists of text as 'List 1' and a line break tag
        - add an unordered list of type as `square` to it with 3 li's with text as item1, item2, item3.
    - Add a line break tag
    - Create a li
        - that consists of text as 'List 2' and a line break tag
        - add an unordered list of type as `disc` to this li
            - add li to this with text as 'item4'
            - add li that has ordered list inside it with type as 'I' and that ordered list consists of 3 li's with text as nested1, nested2, nested3.
    - Create a li
        - that consists of text as 'List 3' and a line break tag
        - add an ordered list of type `A` to this li
            - add li to this that consists of a description list
                - consists of dt as 'Prepbytes' inside em tag.
                - consists of a dd with two anchors.
                - first anchor has target "_blank"  and link as 'https://www.prepbytes.com/development-programs/online-full-stack-developer-mern-certification-program' with text inside it as 'Elevation'
                - Second anchor's link is 'https://www.prepbytes.com/prepbytes-expert-coder/master-competitive-programming' with text as  'Zenith'

            - add li to this that consists of a description list
                - consists of dt as 'Logo'
                - consists of a dd with and image.
                -image has alternative text as 'prepbytes' and link as 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/uzxxllgloialmn9mhwfe' 

        
Follow all the given instructions and pass all the tests to complete this project.

#### Test Cases:

Below is the list of test cases your code will be tested on:
1. The first test case have the following checks:
Check for an ordered list of type `i` with the `reversed` attribute.
Check if the body contains a single ordered list with attributes type `i` and `reversed` attribute.
2. The second test case have the following checks:
Check for a list inside an ordered list of type `i` with the text content "List 1".
Check if the first list item `li` in the ordered list contains the text "List 1".
3. The third test case have the following checks:
Check for a `br` tag inside a list with the text content "List 1".
Check if the first list item contains a `br` tag.
4. The fourth test case have the following checks:
Check for an unordered list of type `square` with three list items and text content as given in instructions.
Check if the second list item in the ordered list contains an unordered list `ul` with type as `square` and three list items with specific text content.
5. The fifth test case have the following checks:
 Check for a `br` tag after the list with the text content "List 1".
Check if there is a `br` tag immediately after the first list item.
6. The sixth test case have the following checks:
Check for a list with the text content "List 2".
Check if the second list item contains the text "List 2".
7. The seventh test case have the following checks:
Check for a `br` tag inside a list with the text content "List 2".
Check if the second list item contains a `br` tag.
8. The eighth test case have the following checks:
Check for an unordered list of type `disc` inside the list with the text content "List 2" after the `br` tag.
Check if the second list item contains an unordered list with type `disc`.
9. The ninth test case have the following checks:
Check for a list with the text content "item4" inside an unordered list of type `square`.
Check if the first list item in the nested unordered list contains the text "item4".
10. It have the following check:
Check for an ordered list of type `I` with three list items and  text as given.
Check if the second nested list item contains an ordered list with type `I` and three list items with text as given.
11. The eleventh test case have the following checks:
Check for a list with the text content "List 3".
Check if the fifth list item contains the text "List 3".
12. It have the following checks:
Check for a `br` tag inside a list with the text content "List 3".
Check if the fifth list item contains a `br` tag.
13. It have the following checks:
Check for an ordered list of type `A` after the `br` tag, inside a list with the text content "List 3".
Check if the fifth list item contains an ordered list with type `A`.
14. It have the following checks:
Check for a list tag inside an ordered list of type `A`, inside a list with the text content "List 3".
Check if the fifth list item contains a nested unordered list.
15. It have the following checks:
Check for a description list inside the nested list, inside an ordered list of type `A`, inside a list with the text content "List 3".
Check if the nested unordered list contains two description lists with specific content.
16. Check if there is a description list `dl` inside a list `li` inside an ordered list `ol` with type `A` inside a list item `li` with text content "List 3". Verify that the structure and content of the `dl` are as given in instructions.
17. Check if there is an `em` tag inside a list item `li` with text content "List 3" and the `em` tag has the text content "Prepbytes".
18. Check if there is an anchor `a` tag with the `href` attribute "https://www.prepbytes.com/development-programs/online-full-stack-developer-mern-certification-program", text content "Elevation", and `target` attribute "_blank" inside a list item `li` with text content "List 3".
19. Check if there is an anchor `a` tag with the `href` attribute "https://www.prepbytes.com/prepbytes-expert-coder/master-competitive-programming", text "Zenith" inside a list item `li` with text content "List 3".
20. Check if there is a `dt` tag with the text content "Logo" inside a list item `li` with text content "List 3".
21. Check if there is an `img` tag with the `src` attribute "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/uzxxllgloialmn9mhwfe" and the `alt` attribute "prepbytes" inside a list item `li` with text content "List 3".
22. Check the complete structure of the HTML document. Verify if the structure and content of the document match the expected structure, including the ordered lists `ol`, list items `li`, unordered lists `ul`, description lists `dl`, definition terms `dt`, definition descriptions `dd`, `em` tags, anchor `a` tags, and image `img` tags.
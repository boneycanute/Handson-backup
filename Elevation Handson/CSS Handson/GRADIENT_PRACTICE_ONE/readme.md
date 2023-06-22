

### CSS Gradient Practice Assignment

Create a webpage for practicing Css gradient and add the following properties as per the instructions:

#### Instructions

1. Select the h1 having id "heading" using css query selector,
> Set the text-align property as "center"

2. Select the div having id "parent" using query selector:
> Set the display property as "flex"
> Set the justify-content as "space-evenly"
> Set flex-wrap as "wrap"

3. Select the div having class "section" using query selector:
> Set the margin as "30px"

4. Select the div having class "linear-gradient" using css class selector and,
> Set the width as "300px"
> Set height as "200px"
> Set background as "linear-gradient(to right, #FF0000, #FFFF00, #FFA500)"

5. Select the div having class "repeating-linear-gradient" using css class selector and,
> Set width as "300px"
> Set height as "200px"
> Set background as "repeating-linear-gradient(to right, #0000FF, #00FF00 10%, #800080 20%)"


6. Select the div having class "radial-gradient" using css class selector and,
> Set width as "300px"
> Set height as "200px"
> Set background as "radial-gradient(circle at center, #008080, #000080)"

7. Select the div having class "repeating-radial-gradient" using css class selector and,
> Set width as "300px"
> Set height as "200px"
> Set background as "repeating-radial-gradient(circle at center, #FFC0CB, #E6E6FA 20%, #FFFFFF 40%)"

8. Select the div having class "conic-gradient" using css class selector and,
> Set width as 300px
> Set height as "200px"
> Set background as "conic-gradient(from 180deg, #000000, #FFFFFF)"

9. Select the div having class "repeating-conic-gradient" using css class selector and,
> Set width as "300px"
> Set height as "200px"
> Set background as "repeating-conic-gradient(from 180deg, #808080 0%, #FFFFFF 25%, #000000 50%)"


#### Test Cases:
1. This testcase checks the properties of an h1 heading element with the id "heading";
- textAlign should be "center"
2. This testcase checks the properties of a div element with the id "parent";
- display should be "flex"
- flexWrap should be "wrap"
- justifyContent should be "space-evenly"
3. This testcase checks the properties of a div element with the class name "section";
- margin should be "30px".
4. This testcase checks the properties of a div element with the class "linear-gradient";
- backgroundImage should be 'linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0), rgb(255, 165, 0))'.
- height should be "200px".
- width should be "300px".
5. This testcase checks the properties of a div element with the class "repeating-linear-gradient";
- backgroundImage should be 'repeating-linear-gradient(to right, rgb(0, 0, 255), rgb(0, 255, 0) 10%, rgb(128, 0, 128) 20%)'.
- height should be "200px".
- width should be "300px".
6. This testcase checks the properties of a div element with the class "radial-gradient";
- backgroundImage should be 'radial-gradient(circle at center center, rgb(0, 128, 128), rgb(0, 0, 128))'.
- height should be "200px".
- width should be "300px".
7. This testcase checks checks the properties of a div element with the class "repeating-radial-gradient";
- backgroundImage should be 'repeating-radial-gradient(circle at center center, rgb(255, 192, 203), rgb(230, 230, 250) 20%, rgb(255, 255, 255) 40%)'.
- height should be "200px".
- width should be "300px".
8. This testcase checks the properties of a div element with the class "conic-gradient";
- backgroundImage should be 'conic-gradient(from 180deg, rgb(0, 0, 0), rgb(255, 255, 255))'.
- height should be "200px".
- width should be "300px".
9. This testcase selects the div element with the class "repeating-conic-gradient";
- backgroundImage should be 'repeating-conic-gradient(from 180deg, rgb(128, 128, 128) 0%, rgb(255, 255, 255) 25%, rgb(0, 0, 0) 50%)'.
- height should be "200px".
- width should be "300px".
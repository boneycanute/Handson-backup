

### Conic Gradient Live Assignment

Create a webpage for practicing Conic gradient and add the following properties as per the instructions:

#### Instructions

1. Select the h1 having class "heading" using css query selector,
> Set the text-align property as "center"

2. Select the div having class "parent" using query selector:
> Set the display property as "flex"
> Set the justify-content as "space-evenly"

3. Select the div having class "section" using query selector:
> Set the margin as "20px"

4. Select the div having id "grad1" using css query selector and,
> Set height as "200px"
> Set width as "200px"
> Set background-image as "conic-gradient(red, yellow, green)"

5. Select the div having id "grad2" using css query selector and,
> Set height as "200px"
> Set width as "200px"
> Set background-image as "conic-gradient(from 90deg, red, yellow, green);"

6. Select the div having id "grad3" using css query selector and,
> Set height as "200px"
> Set width as "200px"
> Set background-image as "repeating-conic-gradient(red 10%, yellow 20%)"
> Set border-radius as "50%"


#### Test Cases:
1. This testcase selects the h1 element with the id "heading";
- textAlign should be "center".
2. This testcase selects the div element with the id "parent";
- display should be "flex".
- justifyContent should be "space-evenly".
3. This testcase selects the div element with the class "section";
- margin should be "20px".
4. This testcase selects the div element with the id "grad1";
- backgroundImage should be 'conic-gradient(rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 128, 0))'.
- height should be "200px".
- width should be "200px".
5. This testcase selects selects the div element with the id "grad2";
- backgroundImage should be 'conic-gradient(from 90deg, rgb(255, 0, 0), rgb(255, 255, 0), rgb(0, 128, 0))'.
- height should be "200px".
- width should be "200px".
6. This testcase selects selects the div element with the id "grad3";
- backgroundImage should be 'repeating-conic-gradient(rgb(255, 0, 0) 10%, rgb(255, 255, 0) 20%)'.
- height should be "200px".
- width should be "200px".


### CSS Grid Live Assignment One

Create a webpage using Css Position property and add the following properties as per the instructions:

#### Instructions

1. Select the body tag using class querySelector and,
> set margin as "0px"
> set padding as "0px"
> set box-sizing as "border-box"
> set color as "rgb(62, 62, 62)"
> set font-family as "Arial"

2. Select the h1 tag having class "heading" using query selector and,
> set text-align as "center"

3. Select the div with class "grid-container" using query selector and,
> set display as "grid"
> set  grid-template-columns as "auto auto auto"
> set gap as "30px"

4. Select the div having class "grid-item" using query selector and,
> set background-color as "rgb(65, 176, 163)"
> set display as "flex"
> set align-items as "center"
> set justify-content as "center"
> set margin as "10px"
> set padding as "10px"
> set font-size as "18px"

5. Select the div with id "item1" using query selector and,
> set grid-column-start as 1
> set grid-column-end as 4

6. Select the div with id "item2" using query selector and,
> set grid-row-start as 2
> set grid-row-end as 4

7. Select the div with id "item8" using query selector and,
> set grid-area as "4 / 2 / span 2 / span 2"


#### Test Cases:
1. This test case verifies the following CSS properties of the `body` element:
The `fontFamily` property is expected to be "Arial".
The `margin` property is expected to be "0px".
The `padding` property is expected to be "0px".
The `boxSizing` property is expected to be "border-box".
The `color` property is expected to be "rgb(62, 62, 62)".
2.  This test case examines the following CSS property of the h1 element with the class `heading`:
The `textAlign` property is expected to be "center".
3. This test case validates the following CSS properties of the div element with the class `grid-container`:
The `display` property is expected to be "grid".
The `gap` property is expected to be "30px".
The `gridAutoColumns` property is expected to be "auto".
4. This test case checks the following CSS properties of the div element with the class `grid-item`:
The `display` property is expected to be "flex".
The `alignItems` property is expected to be "center".
The `justifyContent` property is expected to be "center".
The `margin` property is expected to be "10px".
The `padding` property is expected to be "10px".
The `fontSize` property is expected to be "18px".
The `backgroundColor` property is expected to be "rgb(65, 176, 163)".
5. This test case examines the following CSS properties of the div element with the id `item1`:
The `gridColumnStart` property is expected to be "1".
The `gridColumnEnd` property is expected to be "4".
6. This test case validates the following CSS properties of the div element with the id `item2`:
The `gridRowStart` property is expected to be "2".
The `gridRowEnd` property is expected to be "4".
7. This test case verifies the following CSS property of the div element with the id `item8`:
The `gridArea` property is expected to be "4 / 2 / span 2 / span 2".
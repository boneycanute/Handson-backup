### Using query Selector

You are provided with a prewritten HTML Code as shown below:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Element By Using Query Selector</title>
</head>
<body>
    <div  id="first">
        <h1>First id first Headline</h1>
        <h1>First id second Headline</h1>
        <h1 class='mycontent'>To Confuse the student </h1>
    </div>
    <div id="second">
        <h1>Second id first Headline</h1>
        <h1>Second id second Headline</h1>
        <h1 class='mycontent'>Needed Headline</h1>
    </div>
    <div id="third">
    <ul>
    <li class="litem">Item 1</li>
    <li class="litem">Item 2</li>
    <li class="litem">Item 3</li>
    </ul>
    </div>
    <script src="./check.js"> </script>
</body>
</html>

You need to perform the following tasks:
- Get the text present in div with id='first' and headline h1 with class='mycontent' and return that text.
- Return the list present inside the div with id='third'.

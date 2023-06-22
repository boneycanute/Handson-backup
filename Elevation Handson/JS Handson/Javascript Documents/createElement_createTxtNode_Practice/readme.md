### Using Create Element & TextNode

You are provided with a prewritten HTML Code as shown below:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Element and Create TextNode</title>
</head>
<body>
    <div >
        <p class="cont"> Inner content containing some random stuff</p>    
    </div>
    <section >
        <p class="cont"> Inner content containing some random stuff part 2</p>    
    </section>
    <div >
        <p class="cont"> Inner content containing some random stuff part 3</p>    
    </div>
    
    <script src="./index.js"></script>
</body>
</html>

You need to perform the following tasks:
- Add content " Created Content." in the 1st paragraph with class='cont' and return the updated div. In the above pseudocode the result will be " Inner content containing some random stuff Created Content."
- Add a span element inside the paragraph present inside section with text as "(Added Content)" and return the updated paragraph. In the above pseudocode the resultant paragraph will look like " Inner content containing some random stuff part 2<span>(New Content)</span>"  

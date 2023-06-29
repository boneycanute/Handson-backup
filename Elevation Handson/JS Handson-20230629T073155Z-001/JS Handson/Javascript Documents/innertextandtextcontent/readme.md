You are provided with a HTML code and the body of the code is written below.
<div>content<span>text</span></div>
<ul>
    <li class="litem">sometext1</li>
    <li class="litem">sometext2<span style="display:none">hiddentext</span></li>
    <li class="litem">sometext3</li>
</ul>
`

You need to write javascript code for the mentioned tasks:
- Change the text present in the first list item visible on the screen to "firstlistText". If
we take above pseudocode then you should replace sometext1 with firstlistText. Finally return the updated list.
- Return the complete text present in the third list item irrespective of its visibility on the screen. If
we take above pseudocode then you should return sometext3.
You are provided with a HTML code and the body of the code is written below.
<div>content<span>text</span></div>
<ul>
    <li class="litem">sometext1</li>
    <li class="litem">sometext2<span style="display:none">hiddentext</span></li>
    <li class="litem">sometext3</li>
</ul>
`

You need to write javascript code for the mentioned tasks:
- Change the text present in the second list item visible on the screen to "newText". If
we take above pseudocode then you should replace sometext2 with newText. Finally return the updated list.
- Return the complete text present in the second list item irrespective of its visibility on the screen. If
we take above pseudocode then you should return sometext2hiddentext.
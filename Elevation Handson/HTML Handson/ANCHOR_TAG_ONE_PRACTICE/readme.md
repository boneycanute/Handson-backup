### Anchor Tag Live Handson

A webpage that features links, headings, and images. The links allow for navigation between the images, as well as redirection to different websites. At the bottom of the page, there is a convenient link to take the user back to the top of the page.

#### Instructions:-

1. Add a center tag.
2. Add an anchor tag inside the center tag with id "newtab", href "https://www.prepbytes.com/", target "_blank" and text content "Open in new Tab"
3. Add an anchor tag inside the center tag with id "sametab", href "https://www.prepbytes.com/", target "_self" and text content "Open in same Tab"
4. Add an anchor tag inside the center tag with id "mailus", href "mailto:abc@gmail.com" and text content "Mail Us"
5. Add an anchro tag inside the center tag with id "callus", href "tel:+911234567899" and text content "Call Us"
6. Add a break tag
7. Add a center tag
8. Add an anchor tag inside the center tag with href "#I1" and text content "Go to image 1"
9. Add an anchor tag inside the center tag with href "#I2" and text content "Go to image 2"
10. Add an anchor tag inside the center tag with href "#I3" and text content "Go to image 3"
11. Add an anchor tag inside the center tag with href "#I4" and text content "Go to image 4"
12. Add a br inside the center tag
13. Add a p tag inside the center tag with id "text1" and text content "Image 1"
14. Add a img tag inside the center tag with width "500px", height "500px", id "I1" and src="https://images.unsplash.com/photo-1681317165845-dca7dd915eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80head(web).svg"
15. Add a br tag inside the center tag
16. Add a p tag inside the center tag with id "text2" and text content "Image 2"
17. Add a img tag inside the center tag with width "500px", height "500px", id "I2" and src="https://images.unsplash.com/photo-1681306635626-3fbbf16b1016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
18. Add a br tag inside the center tag
19. Add a p tag inside the center tag with id "text3" and text content "Image 3"
20. Add a img tag inside the center tag with width "500px", height "500px", id "I3" and src="https://images.unsplash.com/photo-1681186018205-bf4d312c2b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
21. Add a br tag inside the center tag
22. Add a p tag inside the center tag with id "text4" and text content "Image 4"
23. Add a img tag inside the center tag with width "500px", height "500px", id "I4" and src="https://images.unsplash.com/photo-1681138568071-d5ad7f3fd4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
24. Add a br tag inside the center tag with href "#top" and text content "Back To Top"

Follow all the given instructions and pass all the tests to complete this project.

#### Testcases:-
Below is the list of test cases your code will be tested on:

1. `body` tag should contain exactly 9 `a` tags.
2. The first `a` tag id should be "newtab" and textcontent should be "Open in new Tab"
3. The second `a` tag id should be "sametab" and textcontent should "Open in same Tab"
4. The third `a` tag id should be "mailus" and textcontent should be "Mail Us"
5. The fourth `a` tag id should be "callus" and textcontent should be "Call Us"
6. The first `a` tag href should be "https://www.prepbytes.com/"
7. The second `a` tag href should be "https://www.prepbytes.com/"
8. The third `a` tag href should be "mailto:abc@gmail.com"
9. The fourth `a` tag href should be "tel:+911234567899"
10. The first `a` tag target should be "_blank"
11. The second `a` tag target should be "_self"
12. The `a` tag with id "newtab" should be followed by `a` tag with id "sametab"
13. The `a` tag with id "sametab" should be followed by `a` tag with id "mailus"
14. The `a` tag with id "mailus" should be followed by `a` tag with id "callus"
15. The `a` tag with id "callus" should not be followed by any other tag.
16. `body` tag should contain exactly 2 `center` tags.
17. All `a` tags should be enclosed within the center tags.
18. First `center` tag should be followed by `br` tag.
19. The textcontent of fifth `a` tag should be "Go to image 1", sixth `a` tag should be "Go to image 2", seventh `a` tag should be "Go to image 3" and eighth `a` tag should be "Go to image 4".
20. The href of fifth `a` tag should be "I1", sixth `a` tag should be "I2", seventh anchor tag should be "I3", eighth anchor tag should be "I4" and ninth anchor tag should be "top".
21. Count of `p` tags should be exactly 4.
22. The first `p` tag id should be "text1" and textcontent should be "Image 1"
23. The second `p` tag id should be "text2" and textcontent should be "Image 2"
24. The third `p` tag id should be "text3" and textcontent should be "Image 3"
25. The fourth `p` tag id should be "text4" and textcontent should be "Image 4"
26. Count of `img` tag should be exactly 4.
27. The first `img` tag height should be "500px", width should be "500px", id should be "I1" and src should be "https://images.unsplash.com/photo-1680936613337-fc829882b375?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
28. The second `img` tag height should be "500px", width should be "500px", id should be "I2" and src should be "https://images.unsplash.com/photo-1681206805985-143701648cad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
29. The third `img` tag height should be "500px", width should be "500px", id should be "I3" and src should be "https://plus.unsplash.com/premium_photo-1675098651752-9a568b4e5f86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
30. The fourth `img` tag height should be "500px", width should be "500px", id should be "I4" and src should be "https://images.unsplash.com/photo-1681115085351-4c207e8e4ff9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
31. The first `center` tag should be followed by `br` tag.
32. The eighth `a` tag should be followed `br` tag.
33. The second `br` tag should be followed by `p` tag.
34. The first `p` tag should be followed by `img` tag.
35. The first `img` tag should be followed by `br` tag.
36. The third `br` tag should be followed by `p` tag.
37. The second `p` tag should be followed by `img` tag.
38. The second `img` tag should be followed by `br` tag.
39. The fourth `br` tag should be followed by `p` tag.
40. The third `p` tag should be followed by ``img` tag.
41. The third `img` tag should be followed by `br` tag.
42. The fifth `br` tag should be followed by `p` tag.
43. The fourth `p` tag should be followed by `br` tag.
44. The fourth `img` tag should be followed by `br` tag.
45. The sixth `br` tag should be followed by `a` tag.
46. There should not be any tag next to second `center` tag. 
47. There should not be any tag next to ninth `a` tag. 
48. There should not be any tag next to third `a` tag.
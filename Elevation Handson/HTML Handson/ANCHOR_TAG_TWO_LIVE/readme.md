### Anchor Tag Live Handson

In this project we have to add anchor tags which are referring to the images and on clicking the anchors we can navigate to that particular image on the webpage. Every paragraph is followed by an image and every paragraph contains a text identifier for that image.

#### Instructions:-

1. Add an anchor tag with href "#B1" and text content "Go to image 1"
2. Add an anchor tag with href "#B2" and text content "Go to image 2"
3. Add an anchor tag with href "#B3" and text content "Go to image 3"
4. Add an anchor tag with href "#B4" and text content "Go to image 4"
5. Add an br tag
6. Add an p tag with id "text1" and text content "Image 1"
7. Add an img tag with width "500px", height "500px", id "B1" and src="https://images.unsplash.com/photo-1681317165845-dca7dd915eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80head(web).svg"
8. Add an br tag
9. Add an p tag with id "text2" and text content "Image 2"
10. Add an img tag with width "500px", height "500px", id "B2" and src="https://images.unsplash.com/photo-1681306635626-3fbbf16b1016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
11. Add an br tag
12. Add an p tag with id "text3" and text content "Image 3"
13. Add an img tag with width "500px", height "500px", id "B3" and src="https://images.unsplash.com/photo-1681186018205-bf4d312c2b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
14. Add an br tag
15. Add an p tag with id "text4" and text content "Image 4"
16. Add an img tag with width "500px", height "500px", id "B4" and src="https://images.unsplash.com/photo-1681138568071-d5ad7f3fd4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"

Follow all the given instructions and pass all the tests to complete this project.

#### Testcases:-
Below is the list of test cases your code will be tested on:

1. `body` tag should contain exactly 4 `a` tags.
2. The textcontent of first `a` tag should be "Go to image 1", second `a` tag should be "Go to image 2", third `a` tag should be "Go to image 3" and fourth `a` should be "Go to image 4"
3. The href of first `a` tag should be "B1", second `a` tag should be "B2", third `a` tag should be "B3", fourth `a` tag should be "B4".
4. `body` tag should contain exactly 4 `p` tags.
5. The first `p` tag id should be "text1" and textcontent should be "Image 1"
6. The second `p` tag id should be "text2" and textcontent should be "Image 2"
7. The third `p` tag id should be "text3" and textcontent should be "Image 3"
8. The fourth `p` tag id should be "text4" and textcontent should be "Image 4"
9. `body` tag should contain exactly 4 `img` tags.
10. The first `img` tag id should be "B1", width should be "500px", height should be "500px" and src should be "https://images.unsplash.com/photo-1681317165845-dca7dd915eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80head(web).svg"
11. The second `img` tag id should be "B2", width should be "500px", height should be "500px" and src should be "https://images.unsplash.com/photo-1681306635626-3fbbf16b1016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
12. The third `img` tag id should be "B3", width should be "500px", height should be "500px" and src should be "https://images.unsplash.com/photo-1681186018205-bf4d312c2b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
13. The fourth `img` tag id should be "B4", width should be "500px", height should be "500px" and src should be "https://images.unsplash.com/photo-1681138568071-d5ad7f3fd4e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
14. The fourth `a` tag should be followed by `br` tag.
15. The first `br` tag should be followed by `p` tag.
16. The first `p` tag should be followed by `img` tag.
17. The first `img` tag should be followed by `br` tag.
18. The second `br` tag should be followed by `p` tag.
19. The second `p` tag should be followed by `img` tag.
20. The second `img` tag should be followed by `br` tag.
21. The third `br` tag should be followed by `p` tag.
22. The third `p` tag should be followed by `img` tag.
23. The third `img` tag should be followed by `br` tag.
24. The fourth `br` tag should be followed by `p` tag.
25. The fourth `p` tag should be followed by `img` tag.
26. The fourth `img` tag should not be followed by any other tag.
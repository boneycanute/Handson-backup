### Anchor Tag Live Handson

In this project we have to create a webpage with four links. The first link will open the PrepBytes website in the new tab. The second link will open the PrepBytes website in the same tab. The third link will open the user's default email client with the recipient's email address filled in when click. The fourth link will open the user's phone app with the phone number filled in when clicked.

#### Instructions:-

1. Add an anchor tag with id 'newtab', href "https://www.prepbytes.com/", target "_blank" and textcontent "Open in new Tab"
2. Add an anchor tag with id 'sametab', href "https://www.prepbytes.com/", target "_self" and textcontent "Open in same Tab"
3. Add an anchor tag with id 'mailus', href "mailto:abc@gmail.com" and textcontent "Mail Us"
4. Add an anchor tag with id 'callus', href "tel:+911234567899" and textcontent "Call Us"

Follow all the given instructions and pass all the tests to complete this project.

#### Testcases:-
Below is the list of test cases your code will be tested on:

1. `body` tag should contain exactly 4 `a` tags.
2. The first `a` tag id should be "newtab" and its textcontent should be "Open in new Tab"
3. The second `a` tag id should be "sametab" and its textcontent should be "Open in same Tab"
4. The third `a` tag id should be "mailus" and its textcontent should be "Mail Us"
5. The fourth `a` tag id should be "callus" and its textcontent should be "Call Us"
6. The first `a` tag href should be "https://www.prepbytes.com/"
7. The second `a` tag href should be "https://www.prepbytes.com/"
8. The third `a` tag href should be "mailto:abc@gmail.com"
9. The fourth `a` tag href should be "tel:+911234567899"
10. The first `a` tag target should be "_blank"
11. The second `a` tag target should be "_self"
12. The `a` tag with id "newtab" is followed by `a` tag with id "sametab"
13. The `a` tag with id "sametab" is followed by `a` tag with id "mailus"
14. The `a` tag with id "mailus" is followed by `a` tag with id "callus"
15. The third `a` tag should not be followed by any other tag. 
### Remove Details

You are provided with a function named as remDetails(mymap) where mymap is the map passed as an argument.
Your task is to remove an element present in the map with the key as "prepbytes" and return updated map.

##### Example
remDetails({ 'students' => 'placement', 'learning' => 'working', 'prepbytes' => 'company'}) ==> { 'students' => 'placement', 'learning' => 'working'}

**Note**: Use delete method to solve this problem.

### Input Format

You need to simply complete the remDetails function.

### Output Format
Return the mymap map after updating it.

### Input 1
3
students placement
learning working
prepbytes company

### Output 1
students placement
learning working
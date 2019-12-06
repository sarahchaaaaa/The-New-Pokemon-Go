# Paradigms_Final_Project
imckinne  jhoeksem  jybanez1  shwang5
-----------------------------

## Part 1: OO API
### What is does:
Our OO Library API parses JSON data from the pokeapi.co database. It GETs both the names and corresponding types of various pokemon and matches a given pokemon with the types it is strongest and weakest against.

### How to use: 
 The functionality of this API is to help a beginner at Pokemon with best and worst matchups. The user will be able to enter their Pokemon of choice, and our API will send requests to the PokeAPI from PokeAPI.co to return a Pokemon that is a good matchup and a Pokemon that is a poor matchup against the given Pokemon. 

### Testing: Multiple test cases have been added to our test_api.py file. To test run 
```
python3 test_api.py
```

## Part 2: RESTful JSON & Server: 
### What it does 
Our server, found in the file main.py, uses the OO Library API **runs on port 51053**. 

### How to use: 
This RESTful JSON & Server builds off of the OO Library API. It has a similar functionality 

### Testing: 
Multiple tests cases have been added to our test_ws.py file. To test you must have two terminals open. 
In the first, run the server by typing: 
```
python3 main.py
```
In the second, run the test file by entering: 
```
python3 test_ws.py
```

##Part 3: Web Client:
### What it does
We created a website that runs on our server, and updated our server with CORS to accept API requests from our web client. 
A user types in the search bar the name of a Pokemon, and the request returns the given Pokemon's type, types that would be strong
against it, and types that would be weak against it. 

### How to use:
Run the server:
```
cd backend
python3 main.py
```
Access the website:
Go to 
```
student04.cse.nd.edu:/jybanez1/corncob/project
```
Type in the searchbar:
```
{your pokemon} 
```
example
input:
```
squirtle
```
returns:
```
Type: water
Weaknesses: electric, grass
Strengths: rock, fire, ground
```

### Testing:
We tested our web client by manually checking if the search results returned matched up the with expected results 
from the website.
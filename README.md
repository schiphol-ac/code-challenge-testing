# Schiphol test code challenge
This a simple code challenge for testers used for hiring people for Schiphol. It is a fork of the cypress cucumber implementation as found on https://github.com/TheBrainFamily/cypress-cucumber-preprocessor/tree/master/cypress

## Doing and submitting the challenges
This repository contains 3 challenges.
See this as an opportunity to show us your way of working, with the same quality as you would deliver on the job.

Please don’t make solutions to the code challenge publicly available online.

We would prefer to receive a link to a private repository or the project archived in an email.

## What we expect from you
We are especially curious about how you came to your solution and what your motivation is for a specific solution. Please comment on your own code inline or use the `feedback.md` in the root of the folder.

## Run tests
You can run the E2E tests following these steps:
```
npm install
npm test
```  
Or open the cypress GUI:
## Challenges
### Challenge 1 - cypress
Write an E2E test using cucumber and cypress implementing at least a `given`, a `when` and a `then`. Use Google.com as url and assert the search result for '4 + 2'.

### Challenge 2 - cypress
Write an E2E test asserting that:
 - on https://en.wikipedia.org/wiki/Main_Page
 - under `Tools` in the left menu
 - there are 7 menu items
 
### Challenge 3 - cypress
Make the example.feature file in the example map work

### Challenge 4 - javascript
In `./challenge-3/challenge.js` write a function that takes two arrays as input and returns the difference of the two arrays. See corresponding unit tests in `./test/challenge-3.spec.js to find examples.

run the unittests:
`npm run unit`
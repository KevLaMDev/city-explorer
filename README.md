# City Explorer

**Author**: Kevin LaMarca
**Version**: 1.0.2 

## Instructions
- clone down the repo
- add in a .env file, and cp the code fro  .env.sample file, inserting your API token.

## Overview
- This app is designed to take in a location via user input, make an API call requesting data on the location, and render a map of the user's selected location.

## Getting Started
1. create a new react app
2. link app to github remote repo
3. establish state with constructor func
4. create form, attach event listener to form onSubmit, create event handler func that saves user input to state
5. create async API call function; makes the request, inserts the user input into the URL passed into axios.get(). The func then awaits the server response and saves it to state, 

## Architecture
- The app will be written in JS, CSS and HTML using React. An API will also be called upon to provide location based data for rendering via async function which will then save the data in state. 
![image](/public/dataFlow.png);

## Change Log
- 1/17: Got state to update from the userInput: cb event handler is invoked upon keystoke and updates state in real time. GeoData API call working as intend, state gets updated with object from API.
- 1/18: Put in a try/catch code block when calling upon APIs. Downloaded react-bootstrap and bootstrap, used styled bootstrap elements for the map and the error message. Styled the page using css.

## Credit and Collaborations


## Time Estimates

Name of feature: form

Estimate of time needed to complete: 15 mins

Start time: 6:00pm

Finish time: 6:15pm

Actual time needed to complete: 15 minutes

Name of feature: submit event handler

Estimate of time needed to complete: 30 mins

Start time: 6:30pm

Finish time: 7:00

Actual time needed to complete: 30 minutes

Name of feature: async cityinfo api call func

Estimate of time needed to complete: 30 mins

Start time: 7:00pm

Finish time: 8:15pm

Actual time needed to complete: 75 minutes

Name of feature: rendering map

Estimate of time needed to complete: 30 mins

Start time: 8:00pm

Finish time: 8:30pm

Actual time needed to complete: 30 minutes

Name of feature: styling 

Estimate of time needed to complete: 30 mins

Start time: 8:30pm

Finish time: 9:00pm

Actual time needed to complete: 30 minutes

Name of feature: Pull in weather data from server 

Estimate of time needed to complete: 30 mins

Start time: 8:30pm

Finish time: 9:00pm

Actual time needed to complete: 30 minutes

Name of feature: Render weather data from server 

Estimate of time needed to complete: 30 mins

Start time: 9:30pm

Finish time: 10:00pm

Actual time needed to complete: 30 minutes

Name of feature: add request for movie data after retrieving map data

Estimate of time needed to complete: 10 mins

Start time: 6:30pm

Finish time: 6:40pm

Actual time needed to complete: 10 minutes

Name of feature: render retrived movie data from API

Estimate of time needed to complete: 1 hr

Start time: 8:20pm

Finish time: 6:40pm

Actual time needed to complete: 10 minutes

Name of feature: make a subcomponent of Weather.js to render single days

Estimate of time needed to complete: 30 mins

Start time: 2:00am

Finish time: 2:30am

Actual time needed to complete: 30 minutes

Name of feature: make a subcomponent of Movies.js to render single movies

Estimate of time needed to complete: 30 mins

Start time: 2:30am

Finish time: 2:30am

Actual time needed to complete: 30 minutes

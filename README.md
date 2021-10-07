# api-server

## Current LAB - 04

## Data Modeling

Today’s lab adds no new requirements to the API server. Our goal today is to swap out the route handler functions in favor of a Collection Interface which will consume a Sequelize Model and perform generic Database CRUD operations. You should consider this a “refactor” of your previous assignment, but treat this as a new build – do not simply copy your previous files and start working. Rebuild the server, re-asserting your knowledge of how it works, how it’s architected, and how to operate it.

### Author: Mark Thanadabouth

### Collaborators: Alex W(Instructor), Heather B, Charlie F, Jeremy B,

#### Links and Resources
* [Deployed Link (devBranch)](https://markt-basic-api-server-dev.herokuapp.com/)
* [Deployed Link (mainBranch)](https://mt-basic-api-server-prod.herokuapp.com/)

### Setup

#### `.env` requirements
- `PORT` - Port Number

#### Running App
- `npm start` or `npx nodemon`

Endpoints:
- `/`
> Hello Main Server
- `/pet`
> Returns 'pet' object
- `/apexlegend`
> Returns 'apex character' object

#### Tests
- `npm test`


### UML
<!-- > <img src="401lab03_UML.jpg" width="300"/> -->
![Lab04 UML](401lab04_UML.jpg)

### Reflections and Comments
* Start date (10/06)

### LAB - 04

Name of feature: Phase 3

Estimate of time needed to complete: 8 Hours

Start time: 4pm(10/06)

Finish time: 5pm(10/07)

Actual time needed to complete: 5 hours

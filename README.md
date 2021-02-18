## User app api
This api provides user list and an api to to rate the app. Simply made on top of NestJs using Node Js

### Installation
* `docker-compose run middev-task npm install`
* `docker-compose run`
* app should be up on localhost:3000

### Packages used
* [NestJs](https://nestjs.com/)


### Project Structure

* core
  * providers
* user
    * entities
    * http
    * services

Everything is divided by the domains by creating a bounded contenxt. I didnt refill more context since it was quite normal app.

1) Core -: Every common libraries , modules that can be used by all other domains resides her
    * Providers -: They are the building blocks of nest js which represents the injectable class that could be used anywhere else.
    
2) User -: As user is our main domain and everything happens around / with user 
    * Services -: Currently there are two services account & user they encapsulate the data read / write mechanism, in simple word they acts as entities / models

### APi
#### List Users
Url -: `/users`

Method -: `GET`

#### Rate app
Url -: `/rate/app`

Method -: `POST`

BODY -: `{name: string,rating:number}`


### Deployment Strategy
[Google Cloud Run](https://cloud.google.com/run) has been used to deploy on specific command trigger

### Things that could be done in future
* Distill more domain i.e seperate account, app & user concept as for time being it was simple app
* Maintain a versioning strategy for release
* Integration & Unit tests

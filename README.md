# Ethan's personal website 

## Overview

I am going to make a personal website. This site will have a homepage that describes me, images of my personal projects, as well as a mulitple forms and the ability to send me an email and a favorite song and generate a password. 

My forms will take the users name and email as well as a message form. Once they submit, I will store the user's name and email into my mongoDB database, and I will forward the message to my email (currently considering forwarding the email from my own address along with their information). This way users can send me a message without ever needing my email and simply by submitting the form. 


## Data Model


The application will store Users, Lists and Items

* users can have multiple lists (via references)
* each list can have multiple items (by embedding)

(__TODO__: sample documents)

An Example User:


{
  name: "john smith",
  email: "johnsmith@gmail.com" 
  message: "hello ethan"
}

An Example Song: 

{
  title: "Firework"
  artist: "Katy Pery"
}


## [Link to Commented First Draft Schema](db.mjs) 


## Wireframes


![Wireframe](images/wireframe.png)

## Site Map

![Site Map](images/site.png)

## User Stories or Use Cases

(__TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://en.wikipedia.org/wiki/Use_case))

1. as underclassmen, I can send Ethan a request to chat
2. as a tech enthusiast, I can chat with Ethan about one of his projects
3. as a recruiter, I can reach out to Ethan directly and check out his experience
4. as a professional, I can ask Ethan about his experiences
## Research Topics

(__TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

* (6 points) React
    * Use React as the Front-end framework
* (2 points) Material UI React Framework
    * Use Material UI to generate components and animate
* (2 points) npm generate-password library
    * User generate-password to allow user to make a unique password

## [Link to Initial Main Project File](server.mjs) 


## Annotations / References Used

Links:
* https://www.npmjs.com/package/generate-password
* https://mui.com/material-ui/
* https://react.dev/reference/react





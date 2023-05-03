# TheNetwork
backend end social media platform using mongoDB and heroku


## User Story 
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data

## Acceptance Criteria
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list

# Walkthrough video
A walkthrough video that demonstrates the functionality of the social media API must be submitted, and a link to the video should be included in your README file.
The walkthrough video must show all of the technical acceptance criteria being met.
The walkthrough video must demonstrate how to start the application’s server.
The walkthrough video must demonstrate GET routes for all users and all thoughts being tested in Insomnia.
The walkthrough video must demonstrate GET routes for a single user and a single thought being tested in Insomnia.
The walkthrough video must demonstrate POST, PUT, and DELETE routes for users and thoughts being tested in Insomnia.
Walkthrough video must demonstrate POST and DELETE routes for a user’s friend list being tested in Insomnia.
Walkthrough video must demonstrate POST and DELETE routes for reactions to thoughts being tested in Insomnia.


# Technical Acceptance Criteria 
Satisfies all of the preceding acceptance criteria plus the following:
Uses the Mongoose package Links to an external site. to connect to a MongoDB database.
Includes User and Thought models outlined in the Challenge instructions.
Includes schema settings for User and Thought models as outlined in the Challenge instructions.
Includes Reactions as the reaction field's subdocument schema in the Thought model.
Uses functionality to format queried timestamps properly.
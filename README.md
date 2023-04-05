### Realtime-Client-Server-issue-tracking-statistics

To run the application

1. clone the repository
2. cd into backend folder => run npm install to download all dependencies => start the server using nodemon app.js
3. cd into the frontend folder => run npm install to download all dependencies => start the client using ng serve -o

The tasks is yet to be completed as the worker pool part is yet to be done but the process of implementation is already described below.

#### Tech Stack:
1. MEAN stack
     MongoDB—the database - can store and stream binary information.
     Express—the web framework - with templating, routing, and session
management built in.
     Angular—the front-end framework
     Node.js—the web server - particularly good for real-time connections using web sockets.
MongoDB has been around since
The full stack starts with the database and
web server in the back end, contains application logic and control in the middle,
and goes all the way through to the user interface at the front end.

#### Layers

1. Data Layer - Building an internal API
2. Integration Layer - not used because it doesn't give room for API calls or scalabilty. It is tightly coupled.


#### Architecture

This describes the main components of the system, their interactions, and the flow of data between them. Here's a brief overview of each component:

1. Client: The user interface that sends requests to the server to create stories and tasks and receives real-time updates about the processing statistics.

2. Server: The central component that receives requests from the client, processes them, and sends real-time updates to the client.

3. Database: The persistent storage where the server stores the data about stories and tasks.

4. Workers: The threads or processes that the server uses to process the tasks.

5. Cache: The in-memory storage that the server uses to store frequently accessed data.

6. WebSocket: The protocol that the server uses to send real-time updates to the client.

7. Web Worker: A separate thread that the client uses to offload the processing of incoming real-time updates, to make the user interface more responsive.

Overall, this architecture is designed to handle a high volume of incoming requests, process them efficiently, and provide real-time updates to the client in a responsive user interface.

#### Planning the Screens
    Stories && Tasks screens
    1. A screen that displays the following information in real-time
        a. Stories produced per sec
        b. Stories completed per sec
        c. Number of open stories
        d. Number of completed stories

    2. A screen that allows users to add new stories or delete stories

#### Rapid Prototype Development Stages

STAGE 1: BUILD STATIC SITE

The aims of this stage are
 To quickly figure out the layout
 To ensure that the user flow makes sense
At this point, you’re not concerned with a database or flashy effects on the user interface; all you want to do is create a working mockup of the main screens and journeys that a user will take through the application.

STAGE 2: DESIGN THE DATA MODEL AND CREATE THE DATABASE
The aims of this stage are
     To define a data model that reflects the requirements of the application
     To create a database to work with the model
The first part is defining the data model. Stepping back to a bird’s-eye view, what are the objects you need data about, how are the objects connected, and what data is held in them?
When you try to do this stage before building the static prototype, you’re dealing with abstract concepts and ideas. When you have a prototype, you can see what’s happening on different pages and what data is needed where. Suddenly, this stage becomes much easier. Almost unknown to you, you’ve done the hard thinking while building the static prototype.

STAGE 3: BUILD YOUR DATA API
After stages 1 and 2, you have a static site on one hand and a database on the other.
This stage and the next take the natural steps of linking them. The aim of stage 3 is
     To create a RESTful API that allows your application to interact with the database

STAGE 4: HOOK THE DATABASE INTO THE APPLICATION
When you get to this stage, you have a static application and an API exposing an interface to your database. The aim of this stage is
     To get your application to talk to your API
When this stage is complete, the application will look pretty much the same as it did before, but the data will be coming from the database. When it’s done, you’ll have a data-driven application!

STAGE 5: AUGMENT THE APPLICATION
This stage is all about embellishing the application with additional functionality. You might add authentication systems, data validation, or methods for displaying error messages to users. This stage could include adding more interactivity to the front end or tightening the business logic in the application.
The aims of this stage are
     To add finishing touches to your application
     To get the application ready for people to use


#### Hardware architecture
1. Development hardware
2. Production hardware: A common hardware architecture approach: one server to run the application code and API and a second, separate database server (A decoupled architecture using three servers: one for the database, one for the API, and one for the application code), (You can scale MEAN applications by having clusters of servers for each part of your entire application.)

### Process:

First Draft:
API and Data Model Design:
To achieve the objective of designing and implementing a Client/Server application that simulates the creation and completion of user-stories and tasks, I would suggest the following API and data model design:
Data Model:
The data model would consist of two main entities, 'Story' and 'Task'. One story can have many tasks, but a task can belong to only one story. The status of a story can be 'Open' or 'Done', and the status of a task can be 'Open' or 'Done'. Besides the status, both entities would have other attributes like 'name,' 'description,' and 'estimate,' which would be used to simulate the creation and completion of user-stories and tasks.
API:
The server would expose two endpoints, one for creating a story and another for creating a task. The client would send a POST request to the server's API with the necessary data to create a story or a task. The server would then process the data, update the corresponding entities, and send real-time updates to the client.
Real-time Aspect of Informing the Client about Changes:
To inform the client about changes in real-time, the server would use WebSockets. When the client connects to the server, the server would establish a WebSocket connection and send real-time updates to the client using the WebSocket connection.
Data Persistence:
To persist the data, the server would use a database. The data would be stored in tables for 'Story' and 'Task.' When the server starts, it would read the data from the database and continue processing the data.
User Interface Technology:
The client interface can be implemented using any modern frontend technology like React, Angular, or Vue. The UI would display the following information in real-time:
	•	Stories produced per sec
	•	Stories completed per sec
	•	Number of open stories
	•	Number of completed stories
Interesting Implementation Choices:
To optimize performance, the server would use a pool of workers to process the tasks. The number of workers would be dynamically adjusted based on the incoming load. Additionally, the server would use an in-memory cache to store frequently accessed data, like the number of open stories, to reduce the number of database queries. Finally, to make the UI more responsive, the client would use a web worker to offload the processing of incoming real-time updates.
*******************************************************************************


This is a complex task that involves multiple components and requires integration between the server and client-side code. I will outline the steps required to implement the desired functionality.
	1	Server-side implementation:
a) Implement a worker pool that can handle incoming tasks from multiple clients. The worker pool should be able to handle the estimated processing time for each task and adjust the number of workers based on the incoming load.
b) When a task is received by the server, the server should sleep for the duration of the estimated processing time. During this time, the server can send real-time updates to the client to display processing statistics.
c) When a task is completed, the server should update the corresponding story and check if all the tasks in the story are completed. If all tasks are completed, the story should be marked as done.
d) The server should persist any data to continue processing after a restart.
	2	Client-side implementation:
a) Create a user interface that can display processing statistics in real-time. The user interface should display the following information:
	•	Stories produced per sec
	•	Stories completed per sec
b) When a story is created, the client should send the story to the server and display the estimated processing time.
c) During the processing time, the client should display real-time updates on the processing statistics.
d) When a story is completed, the client should display the completion time and update the processing statistics.
	3	Integration between server and client-side:
a) Implement a socket connection between the server and client-side code to send real-time updates.
b) When a task is received by the server, the server should send a message to the client-side to update the processing statistics.
c) When a task is completed, the server should send a message to the client-side to update the completion time and processing statistics.
d) The client-side should listen for these messages and update the user interface accordingly.
The above steps outline the basic approach to implementing the desired functionality. The specific implementation details will depend on the technologies used and the specific requirements of the project.

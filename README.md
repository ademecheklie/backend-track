
# Backend Track Stage 1 Project

## Overview
This project is a backend application built using Express.js. It provides a basic web server with three basic routes that demonstrate the use of HTTP GET methods to show static messages. 



## Features
- '/name': Returns a full name as plain text.
- '/hobby': Returns  favorite hobby or a fun activity as a JSON object.
- '/dream': Returns a motivational message about a dream or goal in life.



## Installation

1. Clone the repository:
   
   git clone https://github.com/ademecheklie/backend-track.git
  

2. Navigate to the project directory:
  
   cd backend_track


3. Install the dependencies:

   npm install
 



## Usage

1. Start the server:

   npm start
  

2. Access the routes:
   - Open your browser or use an API testing tool like Postman or thunder client on visual studio code.
   - Test the following routes:
     - `http://localhost:5000/name`
       Response: full name as plain text.
     - `http://localhost:5000/hobby`
       Response: A JSON object with a favorite hobby.
     - `http://localhost:5000/dream`
       Response: A motivational message about a dream or goal.


## Technologies Used
Node.js: JavaScript runtime for building the server.
Express.js: Web framework to handle routes and HTTP requests.


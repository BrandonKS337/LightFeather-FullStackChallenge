# Notification Form Component
React/Node.js Challenge presented to me by LightFeather

## Description

This module is the React/Node.js coding challenge provided by LightFeather as a way of digesting a developers individual skill level. It is set with the goal of introducing a simple form for users/employees to utilize with the intent of sending in their updated contact information to a selected supervisor so that this supervisor will have it on hand in the event notifications need to be sent out to that user/employee.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Docker installed on your machine ([Docker installation guide](https://docs.docker.com/get-docker/))
- Node.js installed on your machine ([Node.js installation guide](https://nodejs.org/en/download/))
- Basic understanding of Docker, Node.js, and React 
- Functional WebBrowser such as Chrome, Microsoft Edge, Safari, etc...
- A reliable internet connection for the purpose of downloading the require dependencies and cloning the repository itself.
- As the repository is privatized you will also need to request access at the endpoint mentioned below in step 1

## Installation

To install the project, follow these steps:

### Cloning the Repository

1. Clone the repository to your local machine:
`git clone https://github.com/BrandonKS337/LightFeather-FullStackChallenge.git`


### Setting Up the Server

1. Navigate to the server directory:
`cd local-repository/Server`

2. Build the Docker container for the server:
`docker-compose build`


### Setting Up the Client

1.  Navigate to the client directory:
`cd local-repository/Client`


2. Build the Docker container for the client:
`docker-compose build`

## Running the Application

1. To run the server, use the following command in the Server directory:
`docker-compose up`


2. To run the client, use the following command in the Client directory:
`docker-compose up`


The server will start on `http://localhost:3000`, and the client will be available on `http://localhost:5173`. Both of these can be navigated to locally through your regular webBrowser by entering them in the address bar at the top of the page.

## Usage

The basic usage of the module is that a user/employee can open this module as a modal if it is imported into a larger react app in that way or can navigate to a page with this embedded there. Either way, once the component is rendered client side the user will notice instructions on the top of the container directing them to fill out the displayed fields before submitting the entries. If the user tries to enter invalid data they will be notified through several alerts of the error and the form will reset allowing for re-entry of the information. On a successful submission the user will be notified by a slightly larger notification in the same location as the error.message indicating a successful send-off! If this is embedded into a larger application the future design would be to set up a close button that will allow user to exit the modal or on successful submission the component will close out on its own after a half second delay showing the user the success message. After it closes it will allow user to continue on with what they wer doing by as mentioned: closing the modal/overlay/popOut (depending on component implementation) or redirect user back to previous endpoint.

## Useful Endpoint Info:

## Contributing to Notification Form Component

To contribute, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin [project_name]/[location]`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).


## Contact

If you want to contact me, you can reach me at BrandonKS337@gmail.com with questions.


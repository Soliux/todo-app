
<p align="center">
<img  src="https://img.icons8.com/plasticine/200/000000/todo-list.png"/>
<p align="center">I created this project because I am in the process of learning <a  href="https://reactjs.org"  target="_blank">React JS</a> and the best way of learning for me is by doing 😊. I am using React for the frontend but I also went a step further and incorporated a backend in this project as this is something I will need to do in the future too. For the backend I am using <a  href="https://gofiber.io"  target="_blank">Go Fiber</a> I am using go for the backend because it is a up and coming language and it has some of the best speeds around but also allows you to develop fast in it</p>
</p>

## ⚡️ How to run the app
To run the app you are going to need to install a few things. First off you need to install <a href="https://nodejs.org/en/download/" target="_blank">Node Js</a>. After this is install you are going to need to install <a href="https://golang.org" target="_blank">Go lang</a>, now that you have Node and Go install you are going to need to run some command to be able to install all the dependencies that the program needs. <br>

## Setup backend
To install everything needed for the backend first change in the backend folder `backend/api` once here you need to run this command `go mod tidy` after this has ran it has install all the packages and you can now spin up the backend using this command `go run main.go`. Your terminal should look like so.<br>
![](https://i.imgur.com/BbFGPmT.png)

## Setup Frontend
Now that you have the backend setup the last thing to do is to run the front end. Once you have node install go into the react project folder from the root directory go into the `todo` folder. Go into your terminal and run the following `npm install` this will download all the packages needed to run the front end. After this you are free to run it use `npm start` to do so.

## Accessing the site
After you have done both frontend setup and backend setup you are too go to the `http://localhost:3000` is where it is hosted at. Here is what it looks like: <br>
![](https://i.imgur.com/D3kiNbs.png)
To add a task simply click the add button.<br>
![](https://i.imgur.com/nwvFAVY.png)
It will show a form which you are able to fill out, to remove one simply click the cross and to toggle the reminder double click the card. This is all linked to the backend so as long as you have it running and refresh the page the results will stay as they have changed on the backend.
![](https://i.imgur.com/0cDvLrp.png)
Here I have added a new task to create a GitHub repo as you can see it is displayed on the frontend and even if I refresh the page it will stay there.
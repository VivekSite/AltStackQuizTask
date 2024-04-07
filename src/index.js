import express from "express";
import question from './../public/questions.js'
import bodyParser from "body-parser";

// Create an instance of express
const app = express();

// Configure the middleware for using static files
app.use(express.static("public"));

// Conigure json
app.use(express.json());

// Create the route for homepage and server the html file
app.get("/", (req, res) => {
  res.sendFile("homepage.html", { root: "public" });
});

// Route for sending next question
app.post("/nextQuestion", (req, res) => {
  const nextQuestionIndex = req.body.nextQuestionIndex;
  
  if(!nextQuestionIndex) {
    return res.send(question[0]);
  }

  if(nextQuestionIndex === question.length) {
    return res.send({
      isQuizEnded: true,
      message: "Quiz is ended no more questions to ask." 
    })
  }

  return res.send(question[nextQuestionIndex]);
});

// Define port and listen for request
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
  console.log(`You can access the website at http://localhost:${port}/`);
});

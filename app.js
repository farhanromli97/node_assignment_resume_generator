// const express = require('express')
import express from 'express'
import  resume from "./controllers/resumeControllers.js"

// create expressJS app
const app = express()
const port = 8080

// create public folder
app.use(express.static("public"))

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// POST route to handle form submission
app.post("/generate", resume.submitForm)

// Define a route that renders the form (EJS template)
app.get("/", resume.retrieveForm);

app.listen(port, ()=> {
    console.log(`Server is listening on ${port}`)
  })
import express from "express";
import { PORT, mongoDBURL } from "../backend/config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();
//const port = process.env.PORT || 8000;

//Middleware for parsing request body
app.use(express.json());


//Middleware for handling CORS POLICY
//option 1
//app.use(cors())

//option2 
app.use(cors({
    origin:'http://localhost:5555',
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:['Content-Type'],
}));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("AQUIIIIIIIIIIIIIII");
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App esta conectado");
    app.listen(PORT, () => {
      console.log(`App esta na porta: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

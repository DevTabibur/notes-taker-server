// @ts-nocheck
const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// note-taker
// q1iM7wJWgzOqJ2tO



const uri = "mongodb+srv://note-taker:q1iM7wJWgzOqJ2tO@cluster0.hc4xz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('db connected');
  client.close();
});



app.get('/', (req, res)=>{
  res.send("Hello world")
});

app.listen(port, ()=>{
  console.log(`Server is running on ${port}`);
})

// @ts-nocheck
const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hc4xz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    await client.connect();
    const notesCollection = client.db("NotesTaker").collection("notes");


    // get api to read all notes
    app.get("/notes", async (req, res) => {
      const q = req.query;
      const cursor = notesCollection.find({nam: "topu"});
      const result = await cursor.toArray()
      res.send(result);
    });

    // create NotesTaker
    app.post('/note', async (req, res)=>{
const data = req.body;
console.log('post pi from body', data);
const result = await notesCollection.insertOne(data);
res.send(result)
    })


    //update NOtesTaker
    // DELETE NotesTaker
  } 


  finally {}


}

run().catch(console.dir);



app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

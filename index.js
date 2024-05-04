const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000;


// meddleWare
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Server is runing....")
})



// mongodb start here
// mongodb start here


const uri = `mongodb+srv://${process.env.ADMIN_NAME}:${process.env.PASSWORD}@cluster0.uvkwj1b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// database calaction
const database = client.db("Car-Services")
const serviceCollection = database.collection('service')

async function run() {
  try {
//    service 
//    service 
// get all service
app.get("/service",async(req,res)=>{
 const result = await serviceCollection.find().toArray()
 res.send(result)
})
//    service 
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// mongodb start here
// mongodb start here


app.listen(port, ()=>{
    console.log(`server is runing on port http://localhost:${port}`)
})
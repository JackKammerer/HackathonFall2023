
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "<URI>";
const express = require('express')
const app = express()
const port = 5173
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.use(express.json());
const cors = require('cors');

app.use(cors());

async function addNewUser(object) {
  try {
    await client.connect();

    const database = client.db("HackathonDatabase");

    const collection = database.collection("USER");

    const result = await collection.insertOne(object);

  } catch (error) {
    console.error("Error: ", error);
  } finally {
    await client.close()
  }
}


async function updateUserData(username, dataType, newValue) {
  try {
    await client.connect();

    const database = client.db("HackathonDatabase");

    const collection = database.collection("USER");

    var item = {};

    item[dataType] = newValue;

    const result = await collection.updateOne({Username: username}, {$set: item})
  } catch(error) {
    console.error("Error: ", error);
  } finally {
    await client.close();
  }
}

async function deleteUser(username) {
  try {
    await client.connect();

    const database = client.db("HackathonDatabase");

    const collection = database.collection("USER");

    const result = await collection.deleteOne({Username: username})
  } catch(error) {
    console.error("Error: ", error);
  } finally {
    await client.close();
  }
}

async function find(searchTypes, dataTypes, limit, swooploop) {
  try {
    await client.connect();

    const database = client.db("HackathonDatabase");

    const collection = database.collection(swooploop);

    var query = {};

    searchTypes.forEach( (data, i) => {
      query[data] = dataTypes[i];
    });

    result = await collection.find(query).limit(limit).toArray();

    return result;

  } catch (error) {
    console.error("Error: ", error);
  } finally {
    await client.close();
  }
}



async function query_user_password(Object){
  //try catch block to catch errors
  try{
      await client.connect();
      //query the database for the username and password
      const result = await client.db('HackathonDatabase').collection('USER').find({Username: Object.Username, Password: Object.Password}).toArray()
      //returns an array, if the length is greater than 0 then we have a match
      if(result.length > 0){
          return true
      }else{
          return false
      }

  }catch(e){
      console.error(e)
  }finally{
      await client.close()
  }
}

async function query_major_class(Object){
  try{
    await client.connect();
      //query the database for students with matching major and class
      const result = await client.db('HackathonDatabase').collection('USER').find({Major: Object.Major, Class: Object.Class}).toArray()
      return result
  }catch(e){
      console.error(e)
  }finally{
    await client.close();
  }
}

async function find_partial_matches(username) {
  try {
    await client.connect();
    const database = client.db('HackathonDatabase');
    const collection = database.collection('MATCHES');
    var matched_users = await collection.find({User2: username, Relationship: 0}).limit(20).toArray();

    var promises = [];
    matched_users.forEach(async (user) => {
      var user = await client.db('HackathonDatabase').collection('USER').find({Username: user.User1})
      promises.push(user);
    })
    const return_Array = await Promise.all(promises);
    return return_Array;
  } catch(error) {
    console.error("Error: ", error);
  } finally {
    await client.close();
  }
}

async function gatherBest(className, majorName, username, limit) {
  return await find(["Major", "Class", "Username"], [majorName, className, {$ne: username}], limit, "USER");
}
async function gatherSecondBest(className, majorName, username, limit) {
  return await find(["Class", "Major", "Username"], [className, {$ne: majorName}, {$ne: username}], limit, "USER");
}
async function gatherThirdBest(className, majorName, username, limit) {
  return await find(["Class", "Major", "Username"], [{$ne: className}, majorName, {$ne: username}], limit, "USER");
}
async function gatherWorstBest(className, majorName, limit) {
  return await find(["Major", "Class"], [{$ne: majorName}, {$ne: className}], limit, "USER");
}

async function gatherTop20(className, majorName, username) {
  var allMatches = [];
  
  var halfMatched = await find_partial_matches(username);
  var bestMatches = await gatherBest(className, majorName, username, 20);
  
  var secondMatches = [];
  var thirdMatches = [];
  var lastMatches = [];

  if (bestMatches.length < 20) {
    secondMatches = await gatherSecondBest(className, majorName, username, 20 - bestMatches.length);
  }
  if (bestMatches.length + secondMatches.length < 20) {
    thirdMatches = await gatherThirdBest(className, majorName, username, 20 - (bestMatches.length + secondMatches.length));
  }
  if (bestMatches.length + secondMatches.length + thirdMatches.length < 20) {
    lastMatches = await gatherWorstBest(className, majorName, 20 - (bestMatches.length + secondMatches.length + thirdMatches.length));
  }

  allMatches = halfMatched.concat(bestMatches).concat(secondMatches).concat(thirdMatches).concat(lastMatches);

  return allMatches;
}



//Functions for checking user relationships


//pushes a new relationship
async function push_relationship(direction, user1, user2){
  try{
    await client.connect();
    var rela = 0;
    if(direction == "left"){//if left then set relatioship to -1
      rela = -1;
    }
    const data = {//create data object
      User1: user1,
      User2: user2,
      Relationship: rela
    }
    //push the changes of the data object
    const result = await client.db('HackathonDatabase').collection("MATCHES").insertOne(data)

  }catch(e){
    console.error(e)
  }finally{
    await client.close()
  }
}

//updates the relationship between the two users

async function updateUserRelationship(user1, user2, newValue) {
  try {
    await client.connect();

    const database = client.db("HackathonDatabase");

    const collection = database.collection("MATCHES");

    var item = {};//create item object

    item["Relationship"] = newValue;//updates relathionship value

    const result = await collection.updateOne({User1: user1, User2: user2}, {$set: item})//updates the relationship value on the server
  } catch(error) {
    console.error("Error: ", error);
  } finally {
    await client.close();
  }
}


async function query_matches(user1, user2){
  
  let rela = false
  try{
    await client.connect();
    const result = await client.db("HackathonDatabase").collection("MATCHES").find({User1: user2, User2: user1}).toArray()
    const result2 = await client.db("HackathonDatabase").collection("MATCHES").find({User1: user1, User2: user2}).toArray()
    if(result.length > 0){
      
      if(result[0].Relationship == 0 && result2[0].Relationship == 0){
        rela = true
        await updateUserRelationship(user1, user2, 1);
        await updateUserRelationship(user2, user1, 1);
        
      }else{
        
        await updateUserRelationship(user1, user2, -1);
        await updateUserRelationship(user2, user1, -1);
        
      }
    }
  }catch(e){
    console.error(e)
  }finally{
    await client.close()
    return rela
  }
}

async function matches(user1, user2, direction){
  await push_relationship(direction, user1, user2)
  const matches = await query_matches(user1, user2)
  return matches
}


app.get('/', async (req, res)  => {
  // Handle the POST request
  const test = {
    Username: 'billbob',
    Password: '1234',
    Major: "Computer Science",
    Class: "CS 261"
  }
  const results = await query_major_class(test);
  res.json(results);
});


const bcrypt = require("bcrypt")
async function encrypt(password){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, function(err, hash) {
        return hash
    });
})
}

// var passwords = "1234"
// passwords = encrypt(passwords)

// const user = {
//   Username: "larsotaz@gmail.com",
//   Password: passwords
// }

// addNewUser(user)




const bodyParser = require('body-parser');
app.use(bodyParser.json());



app.post("/login", async (req, res) =>{
  const { username, password } = req.body;
  
  const data = {
    Username: username,
    Password: password
  }
  

  const result = await query_user_password(data);
  res.json(result);


})

app.post("/updateprofile", async (req, res) =>{
  const { username, name, major, Classes } = req.body;
  const data = {
    Username: username,
    Name: name,
    Major: major,
    Class: Classes
  }
  
  for (const key in data) {
    await updateUserData(username, key, data[key]);
  }
  
})

app.post("/newprofile", async (req, res) => {
  const { name, username, email, password, major, classes, discord, GPA, description } = req.body;

  const data = {
    Username: username,
    Password: password,
    Name: name,
    Email: email,
    Major: major,
    Class: classes,
    Discord: discord,
    GPA: GPA,
    Description: description
  }
  
  await addNewUser(data);
  res.json("success");
})


app.get("/matches", async (req, res) => {

  const results = await  gatherTop20("CS 290", "Computer Science", "Anakin")
  res.json(results);

})

app.listen(3000, () =>{
 console.log("Running on port 3000")
})

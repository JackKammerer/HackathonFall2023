const express = require('express')
const app = express()
const port = 3000
const { MongoClient } = require('mongodb')


async function test_send_data(client, data){
    try{
        const result = await client.db('Users').collection("Users").insertOne(data)
        
        console.log(`Inserted id = ${result.insertedId}`)
    }catch(e){
        console.error(e)
    }
    
}

async function query_user_password(client, username, password){
    try{
        const result = await client.db('Users').collection("Users").find({Username: username, Password: password}).toArray()
        if(result.length > 0){
            return true
        }else{
            return false
        }

    }catch(e){
        console.error(e)
    }
}

async function main() {
    const uri = "mongodb+srv://larsotaz:node1234@cluster0.akvwwl3.mongodb.net/?retryWrites=true&w=majority"

    const client = new MongoClient(uri)
    try{
        await client.connect()
        const data = {
            Username: "larsotaz",
            Password: "1234",
            major: 'Computer Science'
        }
        //await test_send_data(client, data)
        let valid = await query_user_password(client, "larsotaz", "1234")
        console.log(valid)
    } catch(e){
        console.error(e)

    } finally {
        await client.close()
    }
    


}



main().catch(console.error)





app.get('/', (req, res) =>{
    res.send('hello there')

})

app.listen(port, () =>{
    console.log("Running on port 3000")
})
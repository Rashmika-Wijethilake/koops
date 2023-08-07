const express = require('express')
const studentModel = require('./models/student')
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())



app.get("/Login", cors(), (req, res) => {

})

app.post('/', async(req, res) => {
    const{name,studentid,username,email,password,comfirm_password,}= req.body
  
    try{
        const check = await studentModel.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
        }
    }

    catch(e){
        res.json("not exist")
    }
})



app.post('/Signup', async(req, res) => {
    const { name, studentid, username, email, password, comfirm_password } = req.body;
  
    const data ={
        name:name,
        studentid:studentid,
        username:username,
        email:email,
        password:password,    
        comfirm_password:comfirm_password
    }
    try{
        const check = await studentModel.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("not exist")
            await studentModel.insertMany([data])
        }
    }

    catch(e){
        res.json("not exist")
    }
})

app.listen(3001,() => {
    console.log('server is running');
})


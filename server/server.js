const express = require('express')
const studentModel = require('./models/student')
const cors = require("cors")
const { unstable_HistoryRouter, useRoutes } = require('react-router-dom')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


//login

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

//signup

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


//edit profile

app.post('/Editprofile', async (req, res) => {
    const { name, email, studentId, username, password, confirm_password } = req.body;
    try {
        const updatedStudent = await studentModel.findOneAndUpdate(
            { email: email },
            {
                $set: {
                    name: name,
                    studentid: studentId,
                    username: username,
                    password: password,
                    comfirm_password: confirm_password
                }
            },
            { new: true }
        );
        if (updatedStudent) {
            res.json("success");
        } else {
            res.json("failure");
        }
    } catch (e) {
        res.status(500).json("error");
    }
});

// Delete account
// ... (other imports and middleware setup)

// Delete account
app.delete('/DeleteAccount', async (req, res) => {
    const { email } = req.body;
  
    try {
      const deletedUser = await studentModel.findOneAndDelete({ email: email });
      if (deletedUser) {
        res.json("success");
      } else {
        res.json("user not found");
      }
    } catch (error) {
      res.status(500).json("error");
    }
  });
  
  // ... (rest of the server code)
  

app.listen(3001,() => {
    console.log('server is running');
})

// const corsOptions = {
//     origin: 'http://yourfrontenddomain.com', // Replace with your frontend domain
//     optionsSuccessStatus: 200 // Some legacy browsers (IE11, various SmartTVs) choke on 204
//   };
  
//   app.use(cors(corsOptions));
  




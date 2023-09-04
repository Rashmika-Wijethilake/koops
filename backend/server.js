const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Student")
.then(() => {
    console.log(`mongodb connected`);
})

.catch(() => {
    console.log(`failed`)
})

const studentModel = require('./models/student'); // Import your student model
const groupModel = require('./models/group'); // Import your group model

//login

app.get("/", cors(), (req, res) => {

})

app.post('/', async(req, res) => {
    const{name,studentid,email,password,comfirm_password,}= req.body
  
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
    const { name, studentid, email, password, comfirm_password } = req.body;
  
    const data ={
        name:name,
        studentid:studentid,
        // username:username,
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
});


// Update profile route (based on _id)
// app.put('/profile/:id', async (req, res) => {
//     const { id } = req.params; // Get the user ID from the URL
//     const { name, studentid, email, password } = req.body; // Get updated data from the request body
  
//     try {
//       // Find the user by ID in the database
//       const user = await studentModel.findById(id);
  
//       if (!user) {
//         return res.status(404).json({ error: 'Profile not found' });
//       }
  
//       // Update user data
//       user.name = name;
//       user.studentid = studentid;
//       user.email = email;
//       user.password = password;
  
//     //   // Hash the updated password if provided
//     //   if (password) {
//     //     const hashedPassword = await bcrypt.hash(password, 10);
//     //     user.password = hashedPassword;
//     //   }
  
//       // Save the updated user document
//       await user.save();
  
//       res.status(200).json({ message: 'Profile updated successfully' });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });

// Define a GET endpoint to fetch groups
app.get('/api/groups', async (req, res) => {
    try {
      const groups = await groupModel.find();
      res.status(200).json(groups);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.post('/api/groups', async (req, res) => {
    try {
      const { groups } = req.body; // Receive an array of groups
  
      const savedGroups = [];
  
      for (const groupData of groups) {
        const { groupName, members } = groupData;
  
        // Find the students by their emails
        const students = await studentModel.find({ email: { $in: members.map((member) => member.email) } });
  
        // Create a new group
        const newGroup = new groupModel({ groupName, members: students });
  
        // Save the group to the database
        await newGroup.save();
  
        // Update the student documents to include the new group
        students.forEach(async (student) => {
          student.groups.push(newGroup);
          await student.save();
        });
  
        savedGroups.push(newGroup);
      }
  
      res.status(201).json({ message: 'Groups created successfully', savedGroups });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

  

app.listen(3001,() => {
    console.log('server is running');
})


  




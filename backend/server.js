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


// DELETE account route
app.delete('/delete-account/:email', async (req, res) => {
  const emailToDelete = req.params.email;

  try {
    // Attempt to find the user by their email and delete their account
    const deletedUser = await studentModel.findOneAndRemove({ email: emailToDelete });

    if (!deletedUser) {
      // If the user with the given email doesn't exist, return an error message
      return res.status(404).json({ message: 'User not found.' });
    }

    // If the user's account was successfully deleted, return a success message
    return res.json({ message: 'Account deleted successfully.' });
  } catch (error) {
    // If an error occurred during the deletion process, return an error response
    console.error(`Account deletion failed: ${error}`);
    return res.status(500).json({ message: 'Server error.' });
  }
});


//edit profile

app.put('/edit-user/:email', async (req, res) => {
  const emailToEdit = req.params.email;
  const { name, studentid, password, comfirm_password } = req.body;

  try {
    // Attempt to find the user by their email and update their data
    const updatedUser = await studentModel.findOneAndUpdate(
      { email: emailToEdit },
      { name, studentid, password, comfirm_password },
      { new: true } // Return the updated user data
    );

    if (!updatedUser) {
      // If the user with the given email doesn't exist, return an error message
      return res.status(404).json({ message: 'User not found.' });
    }

    // If the user's data was successfully updated, return the updated user
    return res.json({ message: 'User data updated successfully.', user: updatedUser });
  } catch (error) {
    // If an error occurred during the update process, return an error response
    console.error(`User data update failed: ${error}`);
    return res.status(500).json({ message: 'Server error.' });
  }
});


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
  

  

app.listen(3001, () => {
    console.log('server is running');
})




  




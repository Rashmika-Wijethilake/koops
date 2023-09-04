const mongoose = require('mongoose')

// create login and signup database
const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required:true
    },
    studentid: {
        type: String,
        required:true
    },
    // username: {
    //     type: String,
    //     required:true
    // },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    comfirm_password: {
        type: String,
        required:true
    },

//To connect students with their study groups.an array of group references
    groups: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'studyGroup',
      },   
]
        
});

const studentModel = mongoose.model("studentLogin", studentSchema )
module.exports = studentModel




  
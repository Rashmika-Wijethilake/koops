const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/Student")
.then(() => {
    console.log(`mongodb connected`);
})

.catch(() => {
    console.log(`failed`)
})

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    studentid: {
        type: String,
        required:true
    },
    username: {
        type: String,
        required:true
    },
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
    }

})

const studentModel = mongoose.model("studentLogin", studentSchema )
module.exports = studentModel
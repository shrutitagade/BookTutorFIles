const mongoose = require('mongoose');

const joinClassSchema = new mongoose.Schema({
    name: {
        type: String,
        
    },
    email: {
        type: String,
       
    },
    mobile: {
        type: String,
        required: true
    },
    education: {
        type: String,
       
    },
    courseName:
    {
        type:String
    },
    college: {
        type: String
    },
    userId: {
        type: String,
        
    },
    
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'JoinClass' }
});

const JoinClass = mongoose.model('JoinClass', joinClassSchema);

module.exports = JoinClass;

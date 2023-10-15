const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user:{                                     //kis user ke notes
        type: mongoose.Schema.Types.ObjectId,  //we are storing a userid from another schema so that we can link it with other model
        ref: 'user'                                    //notes ko user se assosiate kiya
    },
    title:{
        type: String,
        required: true,
    },
    description:{ 
        type: String,
        required: true,
      
    },
    tag:{
        type: String,
        default: "general"
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('notes',NotesSchema);
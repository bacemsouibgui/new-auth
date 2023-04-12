// require mongoose
const mongoose= require('mongoose');

// require Schema from mongoose
const Schema=mongoose.Schema

// create the Schema
const userSchema= new Schema({
    name: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true
    }
})

module.exports= User= mongoose.model("User", userSchema)
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/endgame");

const usersSchema = mongoose.Schema({
  username: String,
  nickname: String,
  discription: String, 

  catagory: {
    type: Array,
    default: []
  },
  datecreated: {
    type:Date,
    default: Date.now()
    }

})

module.exports = mongoose.model("users", usersSchema)
const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: Buffer,
  bio: String,
  posts: [{type: mongoose.Schema.Types.ObjectId , ref: "post"}],
});

userSchema.plugin(plm);
module.exports = mongoose.model("user" , userSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type:mongoose.Schema.Types.String, require:true },
    password: { type:mongoose.Schema.Types.String, require:true },
},{ timestamps:true });

module.exports = mongoose.model('User',userSchema);
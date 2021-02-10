const mongoose = require('mongoose');
const { Schema } = mongoose;

const articleSchema = new Schema({
  userName: String,
  accountNumber: String,
  emailAddres: String,
  identifyNumber: String,
  createdAt: { type: Date, default: Date.now },
});
mongoose.model('user-data', articleSchema);
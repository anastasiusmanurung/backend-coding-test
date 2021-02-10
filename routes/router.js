const mongoose = require('mongoose');
const userData = mongoose.model('user-data');
const commonConstants = require('../common-constants/common-constants');
module.exports = app => {
  app.get('/api/userdata', async (req, res) => {
    const userdata = await userData.find({accountNumber:'anas'}).cache({ expire: 10 });
    res.json(userdata);
  });

  app.get('/api/userdata', async (req, res) => {
    const userdata = await userData.findById.cache({ expire: 10 });
    res.json(userdata);
  });

  

  app.post('/api/userdata', async (req, res) => {
    const { userName, accountNumber,emailAddress , identifyNumber } = req.body;

    if (!userName) {
      return res.status(400).send('User Name '+ commonConstants.CANNOT_BE_NULL);
    }
    if(!accountNumber){
        return res.status(400).send('Account Number '+ commonConstants.CANNOT_BE_NULL);
    }
    if(!emailAddress){
        return res.status(400).send('Email Address '+ commonConstants.CANNOT_BE_NULL);
    }
    if(!identifyNumber){
        return res.status(400).send('Indentify Number '+ commonConstants.CANNOT_BE_NULL);
    }

    const user = new userData({
      userName,
      accountNumber,
      emailAddress,
      identifyNumber,
    });

    try {
      await user.save();
      res.send(user);
    } catch (err) {
      res.status(400).send(err.messa
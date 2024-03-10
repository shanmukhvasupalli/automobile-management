const User = require("../models/User")

const insertuser = async (request, response) => {
    try 
    {
      const input = request.body;
      const user = new User(input);
      await user.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const checkuserlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const user = await User.findOne(input)
       response.json(user)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

  module.exports = {insertuser, checkuserlogin}
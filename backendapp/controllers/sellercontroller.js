const Seller = require("../models/Seller")

const insertseller = async (request, response) => {
    try 
    {
      const input = request.body;
      const seller = new Seller(input);
      await seller.save();
      response.send('Registered Successfully');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };

  const checksellerlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       const seller = await Seller.findOne(input)
       response.json(seller)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

  module.exports = {insertseller, checksellerlogin}
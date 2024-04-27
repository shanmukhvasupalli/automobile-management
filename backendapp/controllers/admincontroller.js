const Admin = require("../models/Admin")
const User = require("../models/User")
const Seller = require("../models/Seller")
const Vehicle = require("../models/Vehicle")
const SpareParts = require("../models/SpareParts")

const multer = require('multer')
const path = require('path')
const fs = require('fs')

const viewusers = async (request, response) => 
 {
    try 
    {
      const user = await User.find();
      if(user.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(user);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };


  const deleteuser = async (request, response) => 
  {
     try 
     {
       const email = request.params.email
       const user = await User.findOne({"email":email})
       if(user!=null)
       {
         await User.deleteOne({"email":email})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send("Email ID Not Found")
       }
 
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };
  const checkadminlogin = async (request, response) => 
  {
     try 
     {
       const input = request.body
       console.log(input)
       const admin = await Admin.findOne(input)
       response.json(admin)
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

   const viewsellers = async (request, response) => 
 {
    try 
    {
      const seller = await Seller.find();
      if(seller.length==0)
      {
        response.send("DATA NOT FOUND");
      }
      else
      {
        response.json(seller);
      }
    } 
    catch (error) 
    {
      response.status(500).send(error.message);
    }
  };
const deleteseller = async (request, response) => 
  {
     try 
     {
       const email = request.params.email
       const seller = await Seller.findOne({"email":email})
       if(seller!=null)
       {
         await Seller.deleteOne({"email":email})
         response.send("Deleted Successfully")
       }
       else
       {
         response.send("Email ID Not Found")
       }
     } 
     catch (error) 
     {
       response.status(500).send(error.message);
     }
   };

   const deletevehicle = async (req, res) => {
    try {
      const { id } = req.params;
      const vehicle = await Vehicle.findByIdAndDelete(id);
      if (!vehicle) {
        return res.status(404).send('Vehicle not found');
      }
      const filePath = path.join(__dirname, '../vehicles', vehicle.file);
      fs.unlinkSync(filePath); 
      res.status(200).send('Vehicle deleted Successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  const deletespareparts = async (req, res) => {
    try {
      const { id } = req.params;
      const sparePart = await SpareParts.findByIdAndDelete(id);
      if (!sparePart) {
        return res.status(404).send('Spare part not found');
      }
      const filePath = path.join(__dirname, '../spareparts', sparePart.file);
      fs.unlinkSync(filePath); 
      res.status(200).send('Spare part deleted Successfully');
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  module.exports = {viewusers, checkadminlogin, deleteuser, viewsellers, deleteseller, deletevehicle, deletespareparts}
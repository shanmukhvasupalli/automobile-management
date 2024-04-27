const User = require("../models/User")
const Vehicle = require("../models/Vehicle")
const SpareParts = require("../models/SpareParts")

const multer = require('multer')
const path = require('path')
const fs = require('fs')

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

   const viewvehicles = async (req, res) => 
{
  try 
  {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } 
  catch (error) 
  {
    res.status(500).send(error.message);
  }
};
const vehicleimage = async (req, res) => 
{
  const filename = req.params.filename;
  const filepath = path.join(__dirname, '../vehicles', filename);
  //console.log(filepath)

    fs.readFile(filepath, (err, data) => {
      if (err) 
      {
        console.error(err);
        return res.status(500).send('Error reading image file');
      }
     
    const ext = path.extname(filename).toLowerCase();
    let contentType = 'application/octet-stream'; // Default to octet-stream (binary data)

if (ext === '.png') {
  contentType = 'image/png';
} else if (ext === '.jpg' || ext === '.jpeg') {
  contentType = 'image/jpeg';
} else if (ext === '.pdf') {
  contentType = 'application/pdf';
} else if (ext === '.txt') {
  contentType = 'text/plain';
}

    res.setHeader('Content-Type', contentType);
      res.send(data);
    })
}

const viewspareparts = async (req, res) => 
{
  try 
  {
    const spareparts = await SpareParts.find();
    res.status(200).json(spareparts);
  } 
  catch (error) 
  {
    res.status(500).send(error.message);
  }
};
const sparepartsimage = async (req, res) => 
{
  const filename = req.params.filename;
  const filepath = path.join(__dirname, '../spareparts', filename);
    console.log(filepath)

    fs.readFile(filepath, (err, data) => {
      if (err) 
      {
        console.error(err);
        return res.status(500).send('Error reading image file');
      }
     
    const ext = path.extname(filename).toLowerCase();
    let contentType = 'application/octet-stream'; // Default to octet-stream (binary data)

if (ext === '.png') {
  contentType = 'image/png';
} else if (ext === '.jpg' || ext === '.jpeg') {
  contentType = 'image/jpeg';
} else if (ext === '.pdf') {
  contentType = 'application/pdf';
} else if (ext === '.txt') {
  contentType = 'text/plain'; 
}

    res.setHeader('Content-Type', contentType);
      res.send(data);
    })
}

const viewvehicledetails = async (request, response) => {
  try {
    const id = request.params.id;
    const vehicle = await Vehicle.findById(id);
    if (vehicle) {
      response.json(vehicle);
    } else {
      response.status(404).send('Vehicle not found');
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const updateprofile = async (request, response) => 
  {
    try 
    {
      const input = request.body;
      const email = input.email; 
      const user = await User.findOne({ email });
      if (!user) 
      {
        response.status(200).send('User not found with the provided email id');
      }
      for (const key in input) 
      {
        if (key !== 'email' && input[key]) {
          user[key] = input[key];
        }
      }
      await user.save();
      response.status(200).send('User Profile Updated Successfully');
    } 
    catch (e) 
    {
      response.status(500).send(e.message);
    }
  };
  module.exports = {insertuser, checkuserlogin, viewvehicles, vehicleimage, viewspareparts, sparepartsimage,viewvehicledetails,updateprofile}
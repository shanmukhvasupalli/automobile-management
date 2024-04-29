const Seller = require("../models/Seller")
const Vehicle = require("../models/Vehicle")
const SpareParts = require("../models/SpareParts")

const multer = require('multer')
const path = require('path')
const fs = require('fs')

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

   // ---------------------------add vehicle------------------------------
   const storagevehicles = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './vehicles'); // Destination folder
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // File naming convention
    }
  });
  
  const upload = multer({ storage: storagevehicles }).single('file');

  const addvehicle = async (req, res) => {
    try {
        upload(req, res, async function (err) {
            if (err) {
                console.error(err);
                return res.status(500).send(err.message);
            }
            const { category, title, type, company, model, year, price, description, rating } = req.body;
            const fileName = req.file ? req.file.filename : undefined;

            // Remove commas from the price string and convert it to a number
            const parsedPrice = parseFloat(price.replace(/,/g, ''));

            const newVehicle = new Vehicle({
                category,
                title,
                type,
                company,
                model,
                year,
                price: parsedPrice, // Use the parsed price
                description,
                rating,
                file: fileName
            });

            await newVehicle.save();
            res.status(200).send('Vehicle added Successfully');
        });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};


  const storeparts = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './spareparts'); // Destination folder
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // File naming convention
    }
  });

  const uploadspare = multer({ storage: storeparts }).single('file');
  const addspareparts = async (req, res) => {

    try {
      uploadspare(req, res, async function (err) 
        {
          if (err) 
          {
            console.error(err);
            return res.status(500).send(err.message);
          }
          const { category, title, type, company, model, price, rating  } = req.body;
          const fileName = req.file ? req.file.filename : undefined; // Extracting file name

          const newSpareParts = SpareParts({
            category,
            title,
            type,
            company,
            model,
            price,
            rating,
            file: fileName
          });
          console.log(newSpareParts)
          await newSpareParts.save();
          res.status(200).send('Spare Parts added Successfully');
        });
      } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
      }
    };

    const updatevehicle = async (request, response) => {
      try {
        const input = request.body;
        const { id } = request.params; 
        const vehicle = await Vehicle.findById(id);
    
        if (!vehicle) {
          return response.status(404).send('Vehicle not found');
        }
    
        for (const key in input) {
          if (key !== 'file' && input[key]) { 
            vehicle[key] = input[key];
          }
        }
    
        await vehicle.save();
    
        response.status(200).send('Vehicle updated successfully');
      } catch (error) {
        console.error(error);
        response.status(500).send(error.message);
      }
    };
    
    const updatesparepart = async (request, response) => {
      try {
        const input = request.body;
        const { id } = request.params; 
        const sparepart = await SpareParts.findById(id);
    
        if (!sparepart) {
          return response.status(404).send('Spare part not found');
        }
    
        for (const key in input) {
          if (key !== 'file' && input[key]) { 
            sparepart[key] = input[key];
          }
        }
    
        await sparepart.save();
    
        response.status(200).send('Spare part updated successfully');
      } catch (error) {
        console.error(error);
        response.status(500).send(error.message);
      }
    }
         
  module.exports = {insertseller, checksellerlogin, addvehicle, addspareparts, updatevehicle, updatesparepart}
const express = require("express")
const router = express.Router()

router.post("/insertuser",require("./controllers/userController").insertuser)
router.get("/viewvehicles",require("./controllers/userController").viewvehicles)
router.get("/vehicleimage/:filename",require("./controllers/userController").vehicleimage)
router.get("/sparepartsimage/:filename",require("./controllers/userController").sparepartsimage)
router.get("/viewspareparts",require("./controllers/userController").viewspareparts)
router.get("/viewvehicledetails/:id",require("./controllers/userController").viewvehicledetails)
router.get("/viewsparepartdetails/:id",require("./controllers/userController").viewsparepartsdetails)
router.put("/updateprofile",require("./controllers/userController").updateprofile)

router.get("/viewusers",require("./controllers/admincontroller").viewusers)
router.post("/checkuserlogin",require("./controllers/userController").checkuserlogin)
router.delete("/deleteuser/:email", require("./controllers/admincontroller").deleteuser)
router.post("/checkadminlogin",require("./controllers/admincontroller").checkadminlogin)

router.post("/addvehicle",require("./controllers/sellercontroller").addvehicle)
router.post("/addspareparts",require("./controllers/sellercontroller").addspareparts)
router.post("/insertseller",require("./controllers/sellercontroller").insertseller)
router.post("/checksellerlogin",require("./controllers/sellercontroller").checksellerlogin)

router.get("/viewsellers",require("./controllers/admincontroller").viewsellers)
router.delete("/deleteseller/:email", require("./controllers/admincontroller").deleteseller)
router.delete("/deletevehicle/:id", require("./controllers/admincontroller").deletevehicle)
router.delete("/deletespareparts/:id", require("./controllers/admincontroller").deletespareparts)
router.put("/updatevehicle/:id", require("./controllers/sellercontroller").updatevehicle)
router.put("/updatespareparts/:id", require("./controllers/sellercontroller").updatesparepart)
module.exports = {router} 
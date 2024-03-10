const express = require("express")
const router = express.Router()
router.post("/insertuser",require("./controllers/userController").insertuser)
router.get("/viewusers",require("./controllers/admincontroller").viewusers)
router.post("/checkuserlogin",require("./controllers/userController").checkuserlogin)
router.delete("/deleteuser/:email", require("./controllers/admincontroller").deleteuser)
router.post("/checkadminlogin",require("./controllers/admincontroller").checkadminlogin)
router.post("/insertseller",require("./controllers/sellercontroller").insertseller)
router.post("/checksellerlogin",require("./controllers/sellercontroller").checksellerlogin)
router.get("/viewsellers",require("./controllers/admincontroller").viewsellers)
router.delete("/deleteseller/:email", require("./controllers/admincontroller").deleteseller)

module.exports = {router}
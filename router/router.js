const express = require("express");
const router = express.Router();
const parties = require("../controllers/parties");
const office = require("../controllers/office");

// const db = require("..databaseconnection");

router.post("/parties/", parties.createParty);
router.get("/parties/", parties.getParties); 
router.get("/parties/:id", parties.getParty); 
router.patch("/parties/:id", parties.updateParty); 
router.delete("/parties/:id", parties.deleteParty); 

router.post("/office/", office.createOffice);
router.get("/office/", office.getOffices); 
router.get("/office/:id", office.getOffice);  


module.exports=router; 


 
const express = require("express");
const router = express.Router();
const getSearchesController = require("../controller/SearchesController");
const baseController = require("../controller/BaseController");

router.get("/isAlive",baseController.isAlive);
router.get("/search",getSearchesController.getPrevSearch);
module.exports=router;

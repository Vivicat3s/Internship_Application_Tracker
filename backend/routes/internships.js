const express = require("express");
const router = express.Router();
const Internship = require("../models/Internship");


/* GET ALL */

router.get("/", async(req,res)=>{

const internships = await Internship.find();
res.json(internships);

});


/* ADD */

router.post("/", async(req,res)=>{

const internship = new Internship(req.body);

await internship.save();

res.json(internship);

});


/* UPDATE */

router.put("/:id", async(req,res)=>{

const updated = await Internship.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
);

res.json(updated);

});


/* DELETE */

router.delete("/:id", async(req,res)=>{

await Internship.findByIdAndDelete(req.params.id);

res.json({message:"Deleted"});

});


module.exports = router;
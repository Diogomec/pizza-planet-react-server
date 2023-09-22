const express = require("express");
const router = express.Router();
const Pizza = require("../models/Pizza.model")

router.get("/getAll", (req, res, next) => {
    try {
        Pizza.find()
        .then(pizzas => 
            res.status(200).json(pizzas))
    }
    catch (error){
            console.error(error);
    }
})

module.exports = router;
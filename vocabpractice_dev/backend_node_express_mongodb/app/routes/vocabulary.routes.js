
module.exports = app => {

  var router = require("express").Router();
  const vocabulary_controller = require("../controllers/vocabulary.controller.js");
//   const db = require("../models");
// const Vocabulary = db.vocabularies;

  // Retrieve all Presets
  router.get("/", vocabulary_controller.findAll);
  

  // Retrieve a single Preset with id
  router.get("/:id", vocabulary_controller.findOne);


  // Create a new Preset
  router.post("/", vocabulary_controller.create);
   
  
  // Update a Preset with id
  router.post("/:id", vocabulary_controller.update);
   

  // Delete a Preset with id
  router.get("/delete/:id", vocabulary_controller.delete);
 

  app.use('/vocab', router);
};
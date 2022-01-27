const db = require("../models");
const Vocabulary = db.vocabularies;

// Create and Save a new Vocabulary
exports.create = (req, res) => {

  if (!req.body.number||!req.body.english_word||!req.body.indonesia_word) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // Create a Vocabulary
    const vocabulary = new Vocabulary({
      number: req.body.number,
      english_word: req.body.english_word,
      indonesia_word: req.body.indonesia_word,
    });

    // Save Vocabulary in the database
    vocabulary
      .save(vocabulary)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Vocabulary."
        });
      });
};

// Retrieve all Vocabularys from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

    Vocabulary.find(condition)
      .then(data => {
        res.json({data});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving vocabularies."
        });
      });
};

// Find a single Vocabulary with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

    Vocabulary.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Vocabulary with id " + id });
        else res.render('admin_add_vocabulary', {data_vocabularies: data});
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Vocabulary with id=" + id });
      });
};

// Update a Vocabulary by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }

    const id = req.params.id;

    Vocabulary.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Vocabulary with id=${id}. Maybe Vocabulary was not found!`
          });
        } else res.send({ message: "Vocabulary was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Vocabulary with id=" + id
        });
      });
};

// Delete a Vocabulary with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

    Vocabulary.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Vocabulary with id=${id}. Maybe Vocabulary was not found!`
          });
        } else {
          res.send({
            message: "Vocabulary was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Vocabulary with id=" + id
        });
      });
};

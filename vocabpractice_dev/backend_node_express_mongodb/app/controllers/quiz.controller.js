const vocabularies = require("../modules/vocabulary.js");

// Retrieve all Vocabularys from the txt file.
exports.start_quiz = (req, res) => {
  res.render('quiz_start', {data_vocabularies: vocabularies, data_min : req.query.min, data_max : req.query.max, data_lang : req.query.lang});
};

// Retrieve all Vocabularys from the txt file.
exports.get_quiz_list = (req, res) => {
  res.render('quiz_list', {data_vocabularies: vocabularies.length});
};


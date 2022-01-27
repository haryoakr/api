
module.exports = app => {

  var router = require("express").Router();
  const quiz_controller = require("../controllers/quiz.controller.js");

  router.get("/", quiz_controller.get_quiz_list);

  router.get("/start", quiz_controller.start_quiz);


  app.use('/quiz', router);
};
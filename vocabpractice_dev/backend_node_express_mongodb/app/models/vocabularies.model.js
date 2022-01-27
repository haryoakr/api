module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      number: Number,
      english_word: String,
      indonesia_word: String,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Vocabulary = mongoose.model("vocabularies", schema);
  return Vocabulary;
};
const fs = require('fs');

var temp_vocabulary = [];
var filter_vocabulary = [];
var result = [];

const allFileContents = fs.readFileSync('app/modules/vocabulary.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
  temp_vocabulary.push(line);
});

for (let x of temp_vocabulary) {
  var temp = x.split('\t');
  var filteredAry = temp.filter(function(e) { return e !== '' });
  filter_vocabulary.push(filteredAry.join());
}

filter_vocabulary = filter_vocabulary.filter(function(e) { return e !== '' });
filter_vocabulary = filter_vocabulary.filter(function(e) { return e !== ' ' });
filter_vocabulary = filter_vocabulary.filter(function(e) { return !e.includes("--"); });

var i = 1;

for (let x of filter_vocabulary) {
  var temp = x.split(',');
  if (temp[0] && temp[1]) {
    const vocabulary = {
      number: i,
      english_word: temp[0],
      indonesia_word: temp[1],
    };
    result.push(vocabulary); 
  }
  ++i;
}

module.exports = result;